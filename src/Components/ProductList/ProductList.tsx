import type { Product } from '../../types/products';
import { ProductCard } from '../ProductCard';

type Props = {
  visibleProducts: Product[];
};

export const ProductList: React.FC<Props> = ({ visibleProducts }) => {
  return (
    <ul>
      {visibleProducts.map((product) => (
        <ProductCard
          key={product.id}
          category={product.category}
          product={product}
        />
      ))}
    </ul>
  );
};
