import './CartItemCard.scss';

export const CartItemCard = () => {
  return (
    <article className="cart-item-card">
      <div className="cart-item-card__content">
        <div className="cart-item-card__icon-delete"></div>
        <div className="cart-item-card__image"></div>
        <div className="cart-item-card__title body-text">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </div>
      </div>

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

      <h3 className="cart-item-card__price">$999</h3>
    </article>
  );
};
