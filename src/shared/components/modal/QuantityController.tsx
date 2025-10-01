import clsx from 'clsx';

import DeleteIcon from '../../assets/icons/close.svg?react';
import Add from '../../assets/icons/countIcons/add.svg?react';
import Minus from '../../assets/icons/countIcons/minus.svg?react';
import { Button } from '../Button/Button.tsx';

type Props = {
  handleIncrement: () => void;
  handleDecrement: () => void;
  onDelete: () => void;
  quantity: number;
  className?: string;
};

export const QuantityController = ({
  handleDecrement,
  handleIncrement,
  quantity,
  onDelete,
  className,
}: Props) => {
  return (
    <div className={clsx('flex justify-center items-center gap-2', className)}>
      <Button variant="ghost" onClick={handleDecrement}>
        <div className="h-6 w-6 flex justify-center items-center bg-greyBack rounded-[50%]">
          <Minus />
        </div>
      </Button>
      <span>{quantity}</span>
      <Button variant="ghost" onClick={handleIncrement}>
        <div className="h-6 w-6 flex justify-center items-center bg-greyBack rounded-[50%]">
          <Add />
        </div>
      </Button>
      <Button variant="ghost" className="pl-4" onClick={onDelete}>
        <div className="h-7.5 w-7.5 flex justify-center items-center bg-greyBack rounded-[50%]">
          <DeleteIcon className="h-3.5 w-3.5" />
        </div>
      </Button>
    </div>
  );
};
