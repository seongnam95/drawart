'use client';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Ref, type ButtonHTMLAttributes } from 'react';

import { cn } from '@shared/lib/cn';

import { Icon, type IconType } from '../icon';

const iconButtonVariants = cva(
  'inline-flex items-center border border-transparent justify-center bg-transparent rounded-md hover:bg-surface transition-all duration-140 ease-in-out',
  {
    variants: {
      variant: {
        ghost: 'bg-transparent',
        filled: 'bg-surface hover:border-border-accent',
        outline: 'bg-transparent border-border',
      },
      size: {
        sm: 'size-6 [&>*]:size-4',
        md: 'size-7 [&>*]:size-5',
        lg: 'size-9 [&>*]:size-6',
      },
      pressEffect: {
        true: 'active:scale-95 active:opacity-90',
      },
    },
    defaultVariants: {
      variant: 'ghost',
      size: 'md',
      pressEffect: true,
    },
  }
);

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  ref?: Ref<HTMLButtonElement>;
  icon: IconType;
  iconClassName?: string;
  asChild?: boolean;
}

const IconButton = ({
  ref,
  className,
  iconClassName,
  variant,
  size,
  icon,
  pressEffect,
  asChild = false,
  ...props
}: IconButtonProps) => {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      className={cn(
        iconButtonVariants({ variant, size, pressEffect, className })
      )}
      {...props}
    >
      <Icon className={iconClassName} icon={icon} />
    </Comp>
  );
};

IconButton.displayName = 'IconButton';

export { IconButton, iconButtonVariants };
