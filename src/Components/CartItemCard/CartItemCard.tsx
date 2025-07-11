import type React from 'react';
import './CartItemCard.scss';
import { NavLink } from 'react-router-dom';
import type { localProduct } from '../../hooks/useLocalStorage';
import { useThemeState } from '../../stateManagers/themeState';

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
  const { theme } = useThemeState();
  const isDisabled = product.quantity === 1;

  const totalPriceForOneProduct = product.price * product.quantity;

  return (
    <article className={`cart-item-card cart-item-card--${theme}`}>
      <div className="cart-item-card__content">
        <button
          className={`cart-item-card__icon-delete cart-item-card__icon-delete--${theme}`}
          onClick={onDelete}
        ></button>
        <NavLink to={`/${product.category}/${product.itemId}`}>
          <img
            src={product.image}
            alt={product.name}
            className="cart-item-card__image"
          />
        </NavLink>

        <NavLink to={`/${product.category}/${product.itemId}`}>
          <p className="cart-item-card__title">{product.name}</p>
        </NavLink>
      </div>

      <div className="cart-item-card__second-part">
        <div className="cart-item-card__count">
          <button
            className={`cart-item-card__button cart-item-card__button--${theme}`}
            disabled={isDisabled}
            onClick={subCount}
          >
            {isDisabled ?
              <div className="cart-item-card__button--sub-disabled"></div>
            : <div
                className={`cart-item-card__button--sub cart-item-card__button--sub--${theme}`}
              ></div>
            }
          </button>
          <p className="cart-item-card__number">{product.quantity}</p>
          <button
            className={`cart-item-card__button cart-item-card__button--${theme}`}
            onClick={addCount}
          >
            <div
              className={`cart-item-card__button--add cart-item-card__button--add--${theme}`}
            ></div>
          </button>
        </div>
        <h3 className="cart-item-card__price">${totalPriceForOneProduct}</h3>
      </div>
    </article>
  );
};
