import clsx from 'clsx';

import Add from '../../assets/icons/countIcons/add.svg?react';
import Minus from '../../assets/icons/countIcons/minus.svg?react';
import { Button } from '../Button/Button.tsx';

type Props = {
  count: number;
  setCount: (count: number) => void;
  className?: string;
};

export const ProductCounter = ({ setCount, count, className }: Props) => {
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      className={clsx(
        'h-11.5 max-w-27.5 bg-backStroke flex flex-1 gap-1 justify-evenly rounded-lg items-center',
        className
      )}
    >
      <Button
        onClick={decrement}
        variant="ghost"
        disabled={count <= 1}
        className="cursor-not-allowed"
      >
        <Minus className={count <= 1 ? 'text-red' : ''} />
      </Button>
      <span>{count}</span>
      <Button onClick={increment} variant="ghost">
        <Add />
      </Button>
    </div>
  );
};
