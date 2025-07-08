import { useContext } from 'react';
import { ProductList } from '../../Components/ProductList';
import { CartContext } from '../../ui/context/CartContext';

export const CartPage = () => {
  const { productInCart } = useContext(CartContext);

  return <ProductList visibleProducts={productInCart} />;
};
