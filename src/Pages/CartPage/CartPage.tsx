import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItemCard } from '../../Components/CartItemCard';
import { LinkBack } from '../../Components/LinkBack';
console.log('SCSS importing...');
import './CartPage.scss';
import type { Product } from '../../types/products';

export const CartPage = () => {
  const { productInCart, setProductInCart } = useContext(CartContext);

  function deleteProductFromCart(product: Product) {
    setProductInCart(product);
  }

  const totalPrice = productInCart.reduce(
    (prev, product) => prev + product.price,
    0,
  );
  const productInCartLength = productInCart.length;

  const stringItem = productInCartLength > 1 ? `items` : `item`;

  return (
    <div className="cart">
      <div className="cart__up-part">
        <LinkBack />

        <h1>Cart</h1>
      </div>

      <div className="cart__down-part">
        <div className="cart__product">
          {productInCart.map((product) => (
            <CartItemCard
              key={product.id}
              product={product}
              onDelete={() => deleteProductFromCart(product)}
            />
          ))}
        </div>

        <div className="cart__checkout">
          <div className="cart__checkout-content">
            <div className="cart__checkout-content-text">
              <h2 className="cart__total-price">${totalPrice}</h2>
              <div className="cart__total-number body-text">
                Total for {productInCartLength} {stringItem}
              </div>
            </div>
            <div className="cart__line"></div>
            <button className="cart__check-button body-text">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
