import type { ReactNode } from 'react';

import clsx from 'clsx';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Wrapper = ({ children, className }: Props) => {
  return (
    <main className={clsx('px-4 max-w-[1220px] w-full mx-auto lg:px-5 py-3.5 lg:', className)}>
      {children}
    </main>
  );
};
