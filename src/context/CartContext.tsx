/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Product } from '../types/products';

interface CartContextType {
  productInCart: Product[];
  setProductInCart: (v: Product) => void;
}

export const CartContext = React.createContext<CartContextType>({
  productInCart: [],
  setProductInCart: () => {},
});

interface PropsCartContext {
  children: React.ReactNode;
}

export const CartProvider: React.FC<PropsCartContext> = ({ children }) => {
  const [productInCart, setProductInCart] = useLocalStorage<Product>(
    'cart',
    [],
  );

  const value = useMemo(
    () => ({ productInCart, setProductInCart }),
    [productInCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
