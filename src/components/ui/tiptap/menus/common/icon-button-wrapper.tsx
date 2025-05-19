import { cn } from '@/lib/utils';
import React from 'react';

type IconButtonWrapperProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const IconButtonWrapper = ({ children, className, ...props }: Readonly<IconButtonWrapperProps>) => (
  <div
    className={cn(
      'h-full flex cursor-pointer gap-2 items-center rounded-lg p-2 justify-center transition-all hover:bg-gray-100',
      className
    )}
    {...props}
  >
    {children}
  </div>
);
