import React from 'react';
import './ProductCard.scss';

import { ButtonAdd } from '../../ui/ButtonAdd';
import { ButtonFavorite } from '../../ui/ButtonFavorite';

// import type { Product } from '../../types/products';

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

export const ProductCard: React.FC = () => {
  return (
    <article className="productCard">
      <a
        href="#"
        className="productCard__container"
      >
        <div className="productCard__container-photo">
          <img
            src="/img/phones/apple-iphone-11/black/00.webp"
            // src={product.image}
            alt="Product"
            // alt={product.name}
            className="productCard__photo"
          />
        </div>

        <div className="productCard__container-title">
          <span className="productCard__title body-text">
            Apple iPhone 11 128GB Black
          </span>
          {/* <span className="productCard__title body-text">
           {product.name}
          </span> */}
        </div>

        <div className="productCard__container-price">
          <h3 className="productCard__price-discount">$999</h3>
          {/* <h3 className="productCard__price-discount">{product.price}</h3> */}
          <span className="productCard__price-regular">$1299</span>
          {/* <span className="productCard__price-regular">{product.fullPrice}</span> */}
        </div>

        <div className="productCard__divider" />

        <div className="productCard__container-specifications">
          <div className="productCard__block">
            <span className="productCard__info small-text">Screen</span>
            <span className="productCard__value uppercase">6.1”</span>
            {/* <span className="productCard__value uppercase">{product.screen}</span> */}
          </div>
          <div className="productCard__block">
            <span className="productCard__info small-text">Capacity</span>
            <span className="productCard__value uppercase">128 GB</span>
            {/* <span className="productCard__value uppercase">{product.capacity}</span> */}
          </div>
          <div className="productCard__block">
            <span className="productCard__info small-text">RAM</span>
            <span className="productCard__value uppercase">6 GB</span>
            {/* <span className="productCard__value uppercase">{product.ram}</span> */}
          </div>
        </div>

        <div className="productCard__container-buttons">
          <ButtonAdd
          // isActive={isInCart}
          // onClick={() => onAddToCart(product.id)}
          />

          <ButtonFavorite
          // isActive={isFavorite}
          // onClick={() => onToggleFavorite(product.id)}
          />
        </div>
      </a>
    </article>
  );
};
