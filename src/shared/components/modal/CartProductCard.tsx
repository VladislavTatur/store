import { QuantityController } from './QuantityController.tsx';

import PointsIcons from '../../assets/icons/menuIcons/points.svg?react';
import type { dataProductsType } from '../../ListProducts/dataCard.types.ts';
import { formatPrice } from '../../utils/formatPrice.ts';
import { Button } from '../Button/Button.tsx';

type Props = {
  data: dataProductsType;
  quantity: number;
  onDelete: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
  onCloseMobileModal: (productId: number, onClose: boolean) => void;
};

export const CartProductCard = ({
  data,
  quantity,
  onDelete,
  onUpdateQuantity,
  onCloseMobileModal,
}: Props) => {
  const { photo, name, article, model, price, currency, id } = data;
  const sum = price * quantity;

  const handleDecrement = () => {
    if (quantity > 1) {
      onUpdateQuantity(quantity - 1);
    } else {
      onDelete();
    }
  };

  const handleIncrement = () => {
    onUpdateQuantity(quantity + 1);
  };

  const onOpenMobileModalHandler = () => {
    onCloseMobileModal(id, true);
  };

  return (
    <div className="flex ">
      <div className=" lg:w-30 lg:h-30 w-22.5 h-22.5 mr-4 rounded-lg overflow-hidden bg-black-8">
        {photo !== '' && <img src={photo} alt={name} className=" h-full object-cover " />}
      </div>
      <div className="lg:flex flex-1 ">
        <div className="mb-2 lg:max-w-48 relative">
          <p className="font-bold mb-2 pr-4">
            {name} <br /> {model}
          </p>
          <div className="absolute right-0 top-0">
            <Button variant="ghost" onClick={onOpenMobileModalHandler}>
              <PointsIcons />
            </Button>
          </div>
          <p>
            <span>Артикул: </span>
            <span className="bg-greyBack p-2 rounded-lg">{article}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 items-end flex-1 justify-between  ">
          <QuantityController
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            onDelete={onDelete}
            quantity={quantity}
            className="hidden lg:flex "
          />
          <div className="text-xl font-bold flex flex-1 items-end">
            {formatPrice(sum)} {currency}
          </div>
        </div>
      </div>
    </div>
  );
};
