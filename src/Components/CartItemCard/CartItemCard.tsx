import type React from 'react';
import './CartItemCard.scss';
import { NavLink } from 'react-router-dom';
import type { localProduct } from '../../hooks/useLocalStorage';
import classNames from 'classnames';

interface CartItemCardProps {
  product: localProduct;
  onDelete: () => void;
  addCount: () => void;
  subCount: () => void;
}

export const CartItemCard: React.FC<CartItemCardProps> = ({
  product,
  onDelete,
  addCount,
  subCount,
}) => {
  const isDisabled = product.quantity === 1;

  const totalPriceForOneProduct = product.price * product.quantity;

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
            className="cart-item-card__button cart-item-card__button--subtract"
            disabled={isDisabled}
            onClick={subCount}
          >
            <div
              className={classNames('subtract', {
                'subtract-disabled': isDisabled,
              })}
            ></div>
          </button>
          <div className="cart-item-card__number body-text">
            {product.quantity}
          </div>
          <button
            className="cart-item-card__button cart-item-card__button--add"
            onClick={addCount}
          >
            <div className="add"></div>
          </button>
        </div>
        <h3 className="cart-item-card__price">${totalPriceForOneProduct}</h3>
      </div>
    </article>
  );
};
