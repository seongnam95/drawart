'use client';

import { HTMLAttributes, ReactNode, useState } from 'react';

import { cn } from '@shared/lib/cn';
import { IconButton } from '@shared/ui/icon-button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  foldable?: boolean;
  action?: ReactNode;
}

export const Card = ({
  children,
  className,
  title,
  foldable,
  action,
  ...props
}: CardProps) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={cn(
        'bg-card border-border-accent shadow-card text-card-foreground relative flex select-none flex-col rounded-lg border',
        className
      )}
      {...props}
    >
      {/* 카드 헤더 */}
      <div
        className={cn(
          'flex items-center border-b border-transparent px-3 py-2',
          open && 'border-border'
        )}
      >
        <span className='typo-label-12 text-card-foreground font-semibold'>
          {title}
        </span>

        {foldable && (
          <div className='absolute right-2 flex items-center'>
            {action}

            <IconButton
              icon={open ? 'ArrowUp' : 'ArrowDown'}
              size='sm'
              onClick={() => setOpen(!open)}
            />
          </div>
        )}
      </div>

      {/* 카드 콘텐츠 */}
      <div
        className={cn(
          'overflow-y-auto',
          open ? 'h-auto opacity-100' : 'h-0 opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
};
