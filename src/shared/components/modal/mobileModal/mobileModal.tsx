import { useHandelLike } from '../../../../hooks/useHandelLike.ts';
import Add from '../../../assets/icons/countIcons/add.svg?react';
import Minus from '../../../assets/icons/countIcons/minus.svg?react';
import Heart from '../../../assets/icons/menuIcons/heart.svg?react';
import RedHeart from '../../../assets/icons/menuIcons/redHeart.svg?react';
import { Button } from '../../Button/Button.tsx';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  productId: number | null;
  quantity: number;
  onDelete: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
};

export const MobileModal = ({
  isOpen,
  onClose,
  onUpdateQuantity,
  quantity,
  onDelete,
  productId,
}: Props) => {
  const { isLiked, toggleLike } = useHandelLike(productId || 0);

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(quantity - 1);
    } else {
      onDelete();
      onClose();
    }
  };

  const handleDelete = () => {
    onDelete();
    onClose();
  };

  const handleIncrement = () => {
    onUpdateQuantity(quantity + 1);
  };
  return (
    <>
      <div
        className={`fixed inset-0 bg-blackout transition-all duration-300 z-20 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed right-0 h-41.5 bottom-0 max-w-157.5 w-full lg:py-11 py-3 px-4 lg:px-12.5 bg-white overflow-y-auto transition-transform duration-300 z-20 ${
          isOpen ? 'translate-y-0' : 'translate-y-full '
        }`}
      >
        <div className="border-b border-black-60 flex justify-between items-center pb-4 pt-9">
          <span className="font-bold">
            Изменить <br /> количество
          </span>
          <div className="flex gap-4">
            <div className="flex w-6 h-6 bg-greyBack rounded-[50%] justify-center items-center ">
              <Button variant="ghost" onClick={handleDecrement}>
                <Minus />
              </Button>
            </div>
            <span className="text-xl">{quantity}</span>
            <div className="flex w-6 h-6 bg-greyBack rounded-[50%] justify-center items-center ">
              <Button variant="ghost" onClick={handleIncrement}>
                <Add />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4">
          <Button variant="ghost" onClick={handleDelete}>
            Удалить
          </Button>
          <Button
            variant="ghost"
            onClick={toggleLike}
            className="flex gap-2 justify-center items-center "
          >
            {isLiked ? <RedHeart /> : <Heart className="w-5 h-5" />}
            <span>В избранное</span>
          </Button>
        </div>
      </div>
    </>
  );
};
