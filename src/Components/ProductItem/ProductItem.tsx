import { NavLink } from 'react-router-dom';
import type { Product } from '../../types/products';

interface ProductItemProps {
  product: Product;
  category?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  category,
}) => {
  return (
    <li>
      <NavLink to={`/${category}/${product.itemId}`}>
        <img
          src={product.image}
          alt="product picture"
        />
        <h2>{product.name}</h2>
        <p>{product.fullPrice}</p>
      </NavLink>

      <div>
        <div>
          <span>Screen</span>
          <span>{product.screen}</span>
        </div>
        <div>
          <span>Capacity</span>
          <span>{product.capacity}</span>
        </div>
        <div>
          <span>RAM</span>
          <span>{product.ram}</span>
        </div>
      </div>

      <div>
        <button>Add to cart</button>
        <button>favorites</button>
      </div>
    </li>
  );
};
