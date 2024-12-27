'use client';

import { PropsWithChildren } from 'react';

import { useZoom } from '../lib';

export const ZoomContainer = ({ children }: PropsWithChildren) => {
  const { wrapperRef, contentRef } = useZoom();

  return (
    <div ref={wrapperRef} className='h-screen w-screen overflow-auto'>
      <div className='h-fit w-fit' ref={contentRef}>
        {children}
      </div>
    </div>
  );
};
