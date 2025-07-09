import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { CartItemCard } from '../../Components/CartItemCard';
import { LinkBack } from '../../Components/LinkBack';
console.log('SCSS importing...');
import './CartPage.scss';

export const CartPage = () => {
  const { productInCart } = useContext(CartContext);

  // const totalPrice = productInCart.reduce(
  //   (prev, product) => prev + product.price,
  //   0,
  // );
  // const productInCartLength = productInCart.length;

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
            />
          ))}
        </div>

        <div className="cart__checkout"></div>
      </div>
    </div>
  );
};
