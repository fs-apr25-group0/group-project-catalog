import './FavoritesPage.scss';

import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { ProductList } from '../../Components/ProductList';
import { UrlWay } from '../../Components/UrlWay';

export const FavoritesPage = () => {
  const { productInFavorite } = useContext(FavoriteContext);

  const favoritesLength = productInFavorite.length;

  return (
    <div className="favorites">
      <UrlWay category={'favorites'} />

      <div className="favorites__title">
        <h1 className="title__text">Favorites</h1>
        <div className="title__count body-text">{favoritesLength} items</div>
      </div>

      <ProductList visibleProducts={productInFavorite} />
    </div>
  );
};
