import type { Product } from '../../types/products';
import { ProductItem } from '../ProductItem/ProductItems';

type Props = {
  visibleProducts: Product[];
};

export const ProductList: React.FC<Props> = ({ visibleProducts }) => {
  return (
    <ul>
      {visibleProducts.map((product) => (
        <ProductItem
          product={product}
          key={product.id}
        />
      ))}
    </ul>
  );
};
