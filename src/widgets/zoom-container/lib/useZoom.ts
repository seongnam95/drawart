/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

export interface DragState {
  startX: number;
  startY: number;
  scrollLeft: number;
  scrollTop: number;
}

interface ZoomOptions {
  minScale?: number;
  maxScale?: number;
}

export const useZoom = ({ minScale = 0.2, maxScale = 3 }: ZoomOptions = {}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [zoomScale, setZoomScale] = useState<number>(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragState, setDragState] = useState<DragState>({
    startX: 0,
    startY: 0,
    scrollLeft: 0,
    scrollTop: 0,
  });

  const zoomPercent = Math.round(zoomScale * 100);

  const calculateZoomScale = (deltaY: number) => {
    const delta = -deltaY;

    const zoomFactor = 1 + delta * 0.005;
    const newScale = zoomScale * zoomFactor;
    const clampedScale = Math.min(Math.max(newScale, minScale), maxScale);

    return clampedScale;
  };

  const adjustScrollToMousePosition = (
    mouseX: number,
    mouseY: number,
    newScale: number
  ) => {
    if (!wrapperRef.current || !contentRef.current) return;

    const contentRect = contentRef.current.getBoundingClientRect();

    const mouseToCenterX = mouseX - contentRect.left - contentRect.width / 2;
    const mouseToCenterY = mouseY - contentRect.top - contentRect.height / 2;

    const dx = mouseToCenterX * (newScale / zoomScale - 1);
    const dy = mouseToCenterY * (newScale / zoomScale - 1);

    wrapperRef.current.scrollBy(dx, dy);
  };

  const handleWheel = (event: WheelEvent) => {
    if (!wrapperRef.current || !contentRef.current) return;

    if (event.ctrlKey || event.metaKey) {
      event.preventDefault();
      event.stopPropagation();

      const newScale = calculateZoomScale(event.deltaY);

      contentRef.current.style.transform = `scale(${newScale})`;
      contentRef.current.style.transformOrigin = 'center center';

      setZoomScale(newScale);
      adjustScrollToMousePosition(event.clientX, event.clientY, newScale);
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    if (e.button !== 1 || !wrapperRef.current) return;

    e.preventDefault();

    wrapperRef.current.style.cursor = 'grabbing';
    setIsDragging(true);
    setDragState({
      startX: e.pageX - wrapperRef.current.offsetLeft,
      startY: e.pageY - wrapperRef.current.offsetTop,
      scrollLeft: wrapperRef.current.scrollLeft,
      scrollTop: wrapperRef.current.scrollTop,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !wrapperRef.current) return;

    e.preventDefault();

    const x = e.pageX - wrapperRef.current.offsetLeft;
    const y = e.pageY - wrapperRef.current.offsetTop;
    const walkX = (x - dragState.startX) * 1.5;
    const walkY = (y - dragState.startY) * 1.5;

    wrapperRef.current.scrollLeft = dragState.scrollLeft - walkX;
    wrapperRef.current.scrollTop = dragState.scrollTop - walkY;
  };

  const handleMouseUp = () => {
    if (!wrapperRef.current) return;

    setIsDragging(false);
    wrapperRef.current.style.cursor = 'default';
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content) return;

    const wrapperWidth = wrapper.clientWidth;
    const wrapperHeight = wrapper.clientHeight;
    const contentWidth = content.clientWidth;
    const contentHeight = content.clientHeight;

    wrapper.scrollTo({
      left: (contentWidth - wrapperWidth) / 2,
      top: (contentHeight - wrapperHeight) / 2,
      behavior: 'instant',
    });
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.addEventListener('wheel', handleWheel);
    wrapper.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      wrapper.removeEventListener('wheel', handleWheel);
      wrapper.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [
    wrapperRef,
    handleWheel,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  ]);

  return { wrapperRef, contentRef, zoomPercent };
};
