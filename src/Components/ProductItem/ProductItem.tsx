import { NavLink } from 'react-router-dom';
import type { Product } from '../../types/products';
import { useTranslationState } from '../../stateManagers/languageState';

interface ProductItemProps {
  product: Product;
  category?: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  category,
}) => {
  const { translate } = useTranslationState();

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
          <span>{translate('Screen')}</span>
          <span>{product.screen}</span>
        </div>
        <div>
          <span>{translate('Capacity')}</span>
          <span>{product.capacity}</span>
        </div>
        <div>
          <span>{translate('RAM')}</span>
          <span>{product.ram}</span>
        </div>
      </div>

      <div>
        <button>{translate('Add to cart')}</button>
        <button>{translate('favorites')}</button>
      </div>
    </li>
  );
};
