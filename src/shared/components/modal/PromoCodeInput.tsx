import clsx from 'clsx';

import ArrowRight from '../../assets/icons/arrowRight.svg?react';
import { Button } from '../Button/Button.tsx';

type Props = {
  className?: string;
};

export const PromoCodeInput = ({ className }: Props) => {
  return (
    <div className={clsx('relative', className)}>
      <input
        name="promocode"
        type="text"
        className="border border-dashed rounded-lg outline-none h-13.5 w-full p-4 pr-13"
        placeholder="Введите промокод"
      />
      <Button variant="ghost" className="absolute right-4 top-1/2 -translate-y-1/2">
        <ArrowRight />
      </Button>
    </div>
  );
};
