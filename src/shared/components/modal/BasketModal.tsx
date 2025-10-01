import { useEffect, useState } from 'react';
import { type MouseEvent } from 'react';

import { CartProductCard } from './CartProductCard.tsx';
import { MobileModal } from './mobileModal/mobileModal.tsx';
import { PromoCodeInput } from './PromoCodeInput.tsx';
import { TotalAmount } from './TotalAmount.tsx';

import { useCart } from '../../../hooks/useCart.ts';
import CloseIcon from '../../assets/icons/close.svg?react';
import { dataProducts } from '../../ListProducts/dataCard.ts';
import { formatPrice } from '../../utils/formatPrice.ts';
import { Button } from '../Button/Button.tsx';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const BasketModal = ({ isOpen, onClose }: Props) => {
  const { cart, removeFromCart, updateCartItem, getQuantity, getTotalItems } = useCart();
  const [isOpenMobileModal, setIsOpenMobileModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  const arrIds = Object.keys(cart);
  const cartItems = dataProducts.filter((el) => arrIds.includes(el.id.toString()));
  const totalAmount = cartItems.reduce((acc, el) => acc + el.price * getQuantity(el.id), 0);

  const handleDeleteProduct = (productId: number) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      updateCartItem(productId, newQuantity);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.paddingRight = '';
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onCloseMobileModal = () => {
    setIsOpenMobileModal(false);
  };

  const openMobileModal = (id: number) => {
    setIsOpenMobileModal(true);
    setSelectedProductId(id);
  };
  const productId = selectedProductId ? selectedProductId : 0;

  return (
    <>
      <MobileModal
        isOpen={isOpenMobileModal}
        onClose={onCloseMobileModal}
        productId={selectedProductId}
        quantity={getQuantity(productId)}
        onDelete={() => handleDeleteProduct(productId)}
        onUpdateQuantity={(newQuantity) => handleUpdateQuantity(productId, newQuantity)}
      />
      <div
        className={`fixed inset-0 bg-blackout transition-all duration-300 z-10 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={handleBackdropClick}
      />

      <div
        className={`fixed right-0 top-0 bottom-0 max-w-157.5 w-full lg:py-11 py-3 px-4 lg:px-12.5 bg-white overflow-y-auto transition-transform duration-300 z-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full '
        }`}
      >
        <div className="flex justify-between pb-9">
          <div className="flex lg:gap-2 gap-1 pt-10">
            <h1 className="lg:text-4xl text-2xl font-bold lg:py-1">Корзина</h1>
            <h3 className="lg:text-xl font-bold flex items-end">/ {getTotalItems()}шт</h3>
          </div>
          <Button variant="ghost" onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        {!arrIds.length && (
          <h2 className="font-bold text-xl text-center pt-5">Корзина товаров пуста</h2>
        )}
        <div className="flex flex-col gap-5 lg:pr-9 pb-26.5 flex-1 overflow-y-auto ">
          {cartItems.map((el) => (
            <CartProductCard
              key={el.id}
              data={el}
              quantity={getQuantity(el.id)}
              onDelete={() => handleDeleteProduct(el.id)}
              onUpdateQuantity={(newQuantity) => handleUpdateQuantity(el.id, newQuantity)}
              onCloseMobileModal={(id) => openMobileModal(id)}
            />
          ))}
        </div>
        <PromoCodeInput className="mb-12" />
        <TotalAmount totalSum={totalAmount} />
        <p className="text-end py-6">
          <span className="flex justify-end font-bold lg:inline lg:font-medium">Итого </span>
          <span className="font-bold text-2xl">{formatPrice(totalAmount)} BYN</span>
        </p>
        <Button className="w-full justify-center" disabled={!arrIds.length}>
          Оформить заказ
        </Button>
      </div>
    </>
  );
};
