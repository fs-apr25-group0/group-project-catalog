import type { Product } from '../../types/products';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';

type Props = {
  visibleProducts: Product[];
};

export const ProductList: React.FC<Props> = ({ visibleProducts }) => {
  return (
    <ul className="product-list">
      {visibleProducts.map((product) => (
        <li key={product.id}>
          <ProductCard
            category={product.category}
            product={product}
          />
        </li>
      ))}
    </ul>
  );
};
