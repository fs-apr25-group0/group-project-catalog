import type { Product } from '../../types/products';
import { ProductCard } from '../ProductCard';
import './ProductList.scss';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

type Props = {
  visibleProducts: Product[];
  loading?: boolean;
};

export const ProductList: React.FC<Props> = ({ visibleProducts, loading }) => {
  const fakeProducts = Array.from({ length: 12 }, (_, i) => ({
    id: `fake-${i}`,
    category: '',
    name: '',
    price: 0,
    fullPrice: 0,
    itemId: '',
    image: '',
    screen: '',
    capacity: '',
    ram: '',
  }));

  return (
    <ul className="product-list">
      {loading ?
        <>
          {fakeProducts.map((pr) => (
            <Skeleton
              key={pr.id}
              height={506}
              width={272}
            />
          ))}
        </>
      : <>
          {visibleProducts.map((product) => (
            <li key={product.id}>
              <ProductCard
                category={product.category}
                product={product}
              />
            </li>
          ))}
        </>
      }
    </ul>
  );
};
