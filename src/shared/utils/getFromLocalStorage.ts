export type CartItem = {
  id: string;
  quantity: number;
};

export type CartData = Record<string, CartItem>;

export const getFromLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;

  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error getting ${key} from localStorage:`, error);
    return defaultValue;
  }
};

export const getCartFromStorage = (): CartData => {
  return getFromLocalStorage<CartData>('cart', {});
};
