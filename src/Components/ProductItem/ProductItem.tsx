import { NavLink } from 'react-router-dom';
import type { Product } from '../../types/products';
import { useTranslation } from '../../hooks/useTranslation';

interface ProductItemProps {
  product: Product;
  category?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  category,
}) => {
  const { translate } = useTranslation();

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
          <span>{translate('common', 'Screen')}</span>
          <span>{product.screen}</span>
        </div>
        <div>
          <span>{translate('common', 'Capacity')}</span>
          <span>{product.capacity}</span>
        </div>
        <div>
          <span>{translate('common', 'RAM')}</span>
          <span>{product.ram}</span>
        </div>
      </div>

      <div>
        <button>{translate('common', 'Add to cart')}</button>
        <button>{translate('common', 'favorites')}</button>
      </div>
    </li>
  );
};
