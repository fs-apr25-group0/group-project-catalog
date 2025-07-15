import type { Product } from '../../types/products';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import { SkeletonProductCard } from '../SkeletonProductCard/SkeletonProductCard';

type Props = {
  visibleProducts: Product[];
  loading?: boolean;
};

export const ProductList: React.FC<Props> = ({ visibleProducts, loading }) => {
  const skeletons = Array.from({ length: 16 });
  return (
    <ul className="product-list">
      {loading ?
        skeletons.map((_, i) => (
          <li key={`skeleton-${i}`}>
            <SkeletonProductCard />
          </li>
        ))
      : visibleProducts.map((product) => (
          <li key={product.id}>
            <ProductCard
              category={product.category}
              product={product}
            />
          </li>
        ))
      }
    </ul>
  );
};
