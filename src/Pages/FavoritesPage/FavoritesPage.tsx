import './FavoritesPage.scss';

import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { ProductList } from '../../Components/ProductList';
import { UrlWay } from '../../Components/UrlWay';
import { useTranslationState } from '../../stateManagers/languageState';

export const FavoritesPage = () => {
  const { productInFavorite } = useContext(FavoriteContext);
  const { translate } = useTranslationState();

  const favoritesLength = productInFavorite.length;

  return (
    <div className="favorites">
      <UrlWay category={translate('favorites')} />

      <div className="favorites__title">
        <h1 className="title__text">{translate('favorites')}</h1>
        <div className="title__count body-text">
          {favoritesLength} {translate('items')}
        </div>
      </div>

      <ProductList visibleProducts={productInFavorite} />
    </div>
  );
};
