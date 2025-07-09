import './FavoritesPage.scss';

import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { ProductList } from '../../Components/ProductList';
import { UrlWay } from '../../Components/UrlWay';
import { useTranslation } from '../../hooks/useTranslation';

export const FavoritesPage = () => {
  const { productInFavorite } = useContext(FavoriteContext);
  const { translate } = useTranslation();

  const favoritesLength = productInFavorite.length;

  return (
    <div className="favorites">
      <UrlWay category={'favorites'} />

      <div className="favorites__title">
        <h1 className="title__text">{translate('common', 'Favorites')}</h1>
        <div className="title__count body-text">
          {favoritesLength} {translate('common', 'items')}
        </div>
      </div>

      <ProductList visibleProducts={productInFavorite} />
    </div>
  );
};
