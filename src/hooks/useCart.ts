import { useState, useEffect } from 'react';

import { type CartData, getCartFromStorage } from '../shared/utils/getFromLocalStorage.ts';

export const useCart = () => {
  const [cart, setCart] = useState<CartData>(getCartFromStorage());

  useEffect(() => {
    const handleCartUpdate = () => {
      setCart(getCartFromStorage());
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId: number, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart[productId];
      const currentQuantity = existingItem ? existingItem.quantity : 0;

      return {
        ...prevCart,
        [productId]: {
          id: productId,
          quantity: currentQuantity + quantity,
        },
      };
    });
  };

  const updateCartItem = (productId: number, quantity: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: {
        id: productId,
        quantity: quantity,
      },
    }));
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const getQuantity = (productId: number): number => {
    return cart[productId]?.quantity || 0;
  };

  const getTotalItems = (): number => {
    return Object.values(cart).reduce((total, item) => total + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    getQuantity,
    getTotalItems,
  };
};
