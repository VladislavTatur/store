import type { ButtonHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

type Props = {
  children?: ReactNode;
  className?: string;
  variant?: 'filled' | 'ghost';
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, disabled, variant = 'filled', ...rest }: Props) => {
  const baseStyles = ' transition-colors flex ';

  const variants = {
    filled: 'bg-main text-white hover:bg-main/90 active:bg-main/80 py-3 px-3 rounded-lg',
    ghost: 'bg-transparent text-black hover:text-black/80 active:text-black/60',
  };

  return (
    <button
      disabled={disabled}
      {...rest}
      className={clsx(
        baseStyles,
        variants[variant],
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        className
      )}
    >
      {children}
    </button>
  );
};
