import React, { useState } from 'react';
import './ProductCard.scss';

import { ButtonAdd } from '../../ui/ButtonAdd';
import { ButtonFavorite } from '../../ui/ButtonFavorite';
import type { Product } from '../../types/products';
import { NavLink } from 'react-router-dom';

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

function useLocalStorage<T>(key: string, startValue: T): [T, (v: T) => void] {
  const [value, setValue] = useState(() => {
    const data = localStorage.getItem(key);

    if (data === null) {
      return startValue;
    }

    try {
      return JSON.parse(data);
    } catch {
      localStorage.removeItem(key);
      return startValue;
    }
  });

  const save = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, save];
}

export const ProductCard: React.FC<PropsProductCart> = ({
  product,
  category,
}) => {
  const [productInCart, setProductInCart] = useLocalStorage<Product[]>(
    'cart',
    [],
  );

  const [productInFavorite, setProductInFavorite] = useLocalStorage<Product[]>(
    'favorite',
    [],
  );

  function addProductInCart(value: Product) {
    setProductInCart([...productInCart, value]);
  }

  function addProductInFavorite(value: Product) {
    setProductInFavorite([...productInFavorite, value]);
  }

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
            // isActive={isInCart}
            onClick={() => addProductInCart(product)}
          />

          <ButtonFavorite
            // isActive={isFavorite}
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
