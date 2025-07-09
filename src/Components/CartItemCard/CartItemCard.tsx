import type React from 'react';
import type { Product } from '../../types/products';
import './CartItemCard.scss';
import { NavLink } from 'react-router-dom';

interface CartItemCardProps {
  product: Product;
  onDelete: () => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  product,
  onDelete,
}) => {
  return (
    <article className="cart-item-card">
      <div className="cart-item-card__content">
        <div
          className="cart-item-card__icon-delete"
          onClick={onDelete}
        ></div>
        <NavLink to={`/${product.category}/${product.itemId}`}>
          <img
            src={product.image}
            alt={product.name}
            className="cart-item-card__image"
          />
        </NavLink>

        <NavLink to={`/${product.category}/${product.itemId}`}>
          <div className="cart-item-card__title body-text">{product.name}</div>
        </NavLink>
      </div>

      <div className="cart-item-card__second-part">
        <div className="cart-item-card__count">
          <button
            className="cart-item-card__button-subtract"
            disabled
          >
            {/* прибарай subtract-disabled якщо кнопка активна */}
            <div className="subtract subtract-disabled"></div>
          </button>
          <div className="cart-item-card__number body-text">1</div>
          <button
            className="cart-item-card__button-add"
            disabled
          >
            <div className="add"></div>
          </button>
        </div>
        <h3 className="cart-item-card__price">${product.price}</h3>
      </div>
    </article>
  );
};
