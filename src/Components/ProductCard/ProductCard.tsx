import './ProductCard.scss';

import { ButtonAdd } from '../../ui/ButtonAdd';
import { ButtonFavorite } from '../../ui/ButtonFavorite';
import type { Product } from '../../types/products';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { FavoriteContext } from '../../ui/context/FavoriteContext';
import { CartContext } from '../../ui/context/CartContext';

// type ProductCardProps = {
//   product: Product;
//   onAddToCart: (id: number) => void;
//   onToggleFavorite: (id: number) => void;
//   isFavorite?: boolean;
//   isInCart?: boolean;
// };

// export const ProductCard: React.FC<ProductCardProps> = (
//   {
//     product,
//     onAddToCart,
//     onToggleFavorite,
//     isFavorite,
//     isInCart,
//   },
// ) => {

interface PropsProductCart {
  product: Product;
  category: string;
}

export const ProductCard: React.FC<PropsProductCart> = ({
  product,
  category,
}) => {
  //це щоб повністю очистити localStorage
  // localStorage.removeItem('cart');
  // localStorage.removeItem('favorite');
  // window.location.reload();

  const { productInCart, setProductInCart } = useContext(CartContext);
  const { productInFavorite, setProductInFavorite } =
    useContext(FavoriteContext);

  function addProductInCart(value: Product) {
    setProductInCart(value);
  }

  function addProductInFavorite(value: Product) {
    setProductInFavorite(value);
  }

  const isProductInCart: boolean = productInCart.some(
    (pr) => product.id === pr.id,
  );
  const isProductInFavorite: boolean = productInFavorite.some(
    (pr) => product.id === pr.id,
  );

  return (
    <li className="productCard">
      <article className="productCard__container">
        <NavLink to={`/${category}/${product.itemId}`}>
          <div className="productCard__container-photo">
            <img
              src={product.image}
              alt={product.name}
              className="productCard__photo"
            />
          </div>

          <div className="productCard__container-title">
            <span className="productCard__title body-text">{product.name}</span>
          </div>

          <div className="productCard__container-price">
            <h3 className="productCard__price-discount">{`$${product.price}`}</h3>
            <span className="productCard__price-regular">{`$${product.fullPrice}`}</span>
          </div>

          <div className="productCard__divider" />

          <div className="productCard__container-specifications">
            <div className="productCard__block">
              <span className="productCard__info small-text">Screen</span>
              <span className="productCard__value uppercase">
                {product.screen}
              </span>
            </div>
            <div className="productCard__block">
              <span className="productCard__info small-text">Capacity</span>
              <span className="productCard__value uppercase">
                {product.capacity}
              </span>
            </div>
            <div className="productCard__block">
              <span className="productCard__info small-text">RAM</span>
              <span className="productCard__value uppercase">
                {product.ram}
              </span>
            </div>
          </div>
        </NavLink>

        <div className="productCard__container-buttons">
          <ButtonAdd
            isActive={isProductInCart}
            onClick={() => addProductInCart(product)}
          />

          <ButtonFavorite
            isActive={isProductInFavorite}
            onClick={() => addProductInFavorite(product)}
          />
        </div>
      </article>
    </li>
  );
};

//додавання перевірки на наяність знижки
// {product.fullPrice > product.price && (
//   <span className="productCard__price-regular">
//     ${product.fullPrice}
//   </span>
// )}
