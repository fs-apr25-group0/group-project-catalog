import type React from 'react';
import { ProductList } from '../ProductList';
import './SliderForProduct.scss';
import type { Product } from '../../types/products';

interface PropsSliderNewProduct {
  visibleProducts: Product[];
  title: string;
}

export const SliderForProduct: React.FC<PropsSliderNewProduct> = ({
  visibleProducts,
  title,
}) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <div>
          <button>scroll left</button>
          <button>scroll right</button>
        </div>
      </div>
      <ProductList visibleProducts={visibleProducts} />
    </section>
  );
};
