import type { Product } from '../../types/products';
import { ProductItem } from '../ProductItem/ProductItem';

type Props = {
  visibleProducts: Product[];
};

export const ProductList: React.FC<Props> = ({ visibleProducts }) => {
  return (
    <ul>
      {visibleProducts.map((product) => (
        <ProductItem
          category={product.category}
          product={product}
          key={product.id}
        />
      ))}
    </ul>
  );
};
