import { useState } from 'react';

import { InformationForCard } from './InformationForCard.tsx';
import { ProductCounter } from './ProductCounter.tsx';
import { ProductImage } from './ProductImage.tsx';

import { useHandelLike } from '../../../hooks/useHandelLike.ts';
import Bag from '../../assets/icons/menuIcons/bag.svg?react';
import type { dataProductsType } from '../../ListProducts/dataCard.types.ts';
import { formatPrice } from '../../utils/formatPrice.ts';
import { getCartFromStorage } from '../../utils/getFromLocalStorage.ts';
import { Button } from '../Button/Button.tsx';

type Props = {
  product: dataProductsType;
};

export const ProductCard = ({ product }: Props) => {
  const { photo, name, price, VIN, currencyExchangeRate, currency, year, id, article } = product;

  const [count, setCount] = useState(1);
  const { toggleLike, isLiked } = useHandelLike(id);

  const convertedPrice = Math.ceil(price / currencyExchangeRate);

  const addToCartHandler = () => {
    const existingCart = getCartFromStorage();

    const existingItem = existingCart[id];
    const currentQuantity = existingItem ? existingItem.quantity : 0;

    const updatedCart = {
      ...existingCart,
      [id]: {
        id,
        quantity: currentQuantity + count,
      },
    };

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
    setCount(1);
  };

  const likeHandler = () => {
    toggleLike();
  };

  return (
    <div>
      <ProductImage
        photo={photo}
        name={name}
        liked={isLiked}
        onClick={likeHandler}
        className="mb-3 lg:mb-4"
      />
      <div>
        <span className="flex lg:hidden justify-end text-xs pb-1">Артикул: {article}</span>
        <span className=" line-clamp-2 min-h-10 lg:min-h-12 font-semibold mb-2 text-sm lg:text-base">
          {name}
        </span>
        <div className="flex gap-1 font-bold mb-1">
          <span>{formatPrice(price)}</span>
          <span>{currency}</span>
        </div>
        <p className="text-black-60 font-bold mb-2">~ {convertedPrice}$</p>
        <div className="hidden lg:flex flex-col gap-1 mb-4">
          <InformationForCard title="VIN" data={VIN} />
          <InformationForCard title="Год" data={year} />
          <InformationForCard title="VIN" data={VIN} />
        </div>
        <div className="mt-auto flex gap-2 justify-between">
          <ProductCounter count={count} setCount={setCount} className="max-w-[70%]" />
          <Button
            onClick={addToCartHandler}
            className="whitespace-nowrap sm:flex-1 justify-center w-[30%] "
          >
            <span className="hidden sm:inline">В корзину</span>
            <Bag className="block sm:hidden" />
          </Button>
        </div>
      </div>
    </div>
  );
};
