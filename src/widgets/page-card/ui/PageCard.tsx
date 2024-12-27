'use client';

import { cn } from '@shared/lib/cn';
import { Card } from '@shared/ui/card';
import { IconButton } from '@shared/ui/icon-button';
import { List, ListItem } from '@shared/ui/list';

interface PageCardProps {
  className?: string;
}

export const PageCard = ({ className }: PageCardProps) => {
  const pages = ['페이지 1', '페이지 2', '페이지 3', '페이지 4', '페이지 5'];

  return (
    <Card
      className={cn('max-h-40 w-52', className)}
      title='페이지'
      foldable
      action={<IconButton icon='Add' size='sm' />}
    >
      <List className='p-2'>
        {pages.map((page, i) => (
          <ListItem key={page} label={page} selected={i === 0} />
        ))}
      </List>
    </Card>
  );
};
