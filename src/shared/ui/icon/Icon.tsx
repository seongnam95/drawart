import { ComponentProps, ReactElement } from 'react';

import { cn } from '@shared/lib/cn';

import * as icons from './icons';

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export interface IconProps extends Omit<ComponentProps<'svg'>, 'ref'> {
  icon: IconType;
  className?: string;
}

export function Icon({ icon, className, ...props }: IconProps): ReactElement {
  const SVGIcon = icons[icon];

  return (
    <SVGIcon className={cn('size-6 text-foreground', className)} {...props} />
  );
}
