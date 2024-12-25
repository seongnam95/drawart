import { cn } from '@shared/lib/cn';

interface GridPatternProps {
  className?: string;
}

export const GridPattern = ({ className }: GridPatternProps) => {
  return (
    <svg
      className={cn('opacity-25', className)}
      width='100%'
      height='100%'
      viewBox='0 0 100% 100%'
      preserveAspectRatio='meet'
    >
      <pattern id='grid' width='50' height='50' patternUnits='userSpaceOnUse'>
        <line
          x1='10'
          y1='0'
          x2='10'
          y2='50'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />
        <line
          x1='20'
          y1='0'
          x2='20'
          y2='50'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />
        <line
          x1='30'
          y1='0'
          x2='30'
          y2='50'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />
        <line
          x1='40'
          y1='0'
          x2='40'
          y2='50'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />

        <line
          x1='0'
          y1='10'
          x2='50'
          y2='10'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />
        <line
          x1='0'
          y1='20'
          x2='50'
          y2='20'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />
        <line
          x1='0'
          y1='30'
          x2='50'
          y2='30'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />
        <line
          x1='0'
          y1='40'
          x2='50'
          y2='40'
          stroke='var(--foreground-muted)'
          strokeWidth='0.5'
        />

        <line
          x1='50'
          y1='0'
          x2='50'
          y2='50'
          stroke='var(--foreground)'
          strokeWidth='1'
        />
        <line
          x1='0'
          y1='50'
          x2='50'
          y2='50'
          stroke='var(--foreground)'
          strokeWidth='1'
        />
      </pattern>
      <rect width='100%' height='100%' fill='url(#grid)' />
    </svg>
  );
};
