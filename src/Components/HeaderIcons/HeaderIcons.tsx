import type React from 'react';
import './HeaderIcons.scss';
import cn from 'classnames';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FavoriteContext } from '../../context/FavoriteContext';

interface HeaderIconsProps {
  type: 'favorites' | 'card' | 'menu' | 'close';
}

export const HeaderIcons: React.FC<HeaderIconsProps> = ({ type }) => {
  const { productInFavorite } = useContext(FavoriteContext);
  const { productInCart } = useContext(CartContext);

  const isFavorite = type === 'favorites' && productInFavorite.length > 0;
  const isCart = type === 'card' && productInCart.length > 0;

  return (
    <div className="icon-container">
      <div className={cn('icon', `icon__${type}`)}></div>
      {isFavorite && (
        <div className="icon__counter-header">{productInFavorite.length}</div>
      )}
      {isCart && (
        <div className="icon__counter-header">{productInCart.length}</div>
      )}
    </div>
  );
};
