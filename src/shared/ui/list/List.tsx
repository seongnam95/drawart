import { HTMLAttributes } from 'react';

import { cn } from '@shared/lib/cn';
import { IconButton } from '@shared/ui/icon-button';

export const List = ({
  className,
  children,
}: HTMLAttributes<HTMLUListElement>) => {
  return <ul className={cn('flex flex-col gap-1', className)}>{children}</ul>;
};

interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  selected?: boolean;
  label?: string;
  onMenu?: () => void;
}

export const ListItem = ({
  label,
  selected,
  className,
  onMenu,
  ...props
}: ListItemProps) => {
  return (
    <li
      className={cn(
        'typo-body-14 hover:bg-surface group relative flex cursor-pointer items-center rounded-md py-1 pl-2 pr-8 text-foreground',
        selected && 'bg-surface font-semibold',
        className
      )}
      {...props}
    >
      <span className='flex-1 overflow-hidden text-ellipsis whitespace-nowrap'>
        {label}
      </span>

      {onMenu && (
        <IconButton
          className='absolute right-1 opacity-0 group-hover:opacity-100'
          icon='More'
          size='sm'
          onClick={onMenu}
        />
      )}
    </li>
  );
};
