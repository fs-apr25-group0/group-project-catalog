import type { Product } from '../../types/products';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

type Props = {
  visibleProducts: Product[];
  loading: boolean;
};

export const ProductList: React.FC<Props> = ({ visibleProducts, loading }) => {
  return (
    <ul className="product-list">
      {visibleProducts.map((product) => (
        <li key={product.id}>
          <ProductCard
            category={product.category}
            product={product}
            loading={loading}
          />
        </li>
      ))}
    </ul>
  );
};
