// import { ProductList } from "../../Components/ProductList";
// import { useLocalStorage } from "../../hooks/useLocalStorage";
// import type { Product } from "../../types/products";

import { useContext } from 'react';
import { FavoriteContext } from '../../ui/context/FavoriteContext';
import { ProductList } from '../../Components/ProductList';

export const FavoritesPage = () => {
  const { productInFavorite } = useContext(FavoriteContext);

  return <ProductList visibleProducts={productInFavorite} />;
};
