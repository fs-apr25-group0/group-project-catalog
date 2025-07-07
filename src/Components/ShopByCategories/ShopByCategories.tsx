import { Link } from 'react-router-dom';

interface ShopByCategoryProps {
  amountPhones: number;
  amountTablets: number;
  amountAccessories: number;
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({
  amountPhones,
  amountTablets,
  amountAccessories,
}) => {
  return (
    <div>
      <h2>Shop by category</h2>
      <div>
        <Link to="phones">
          <img
            src="*"
            alt="phones logo"
          />
          <p>Mobile phones</p>
          <span>{amountPhones}</span>
        </Link>
      </div>
      <div>
        <Link to="tablets">
          <img
            src="*"
            alt="tablets logo"
          />
          <p>tablets</p>
          <span>{amountTablets}</span>
        </Link>
      </div>
      <div>
        <Link to="accessories">
          <img
            src="*"
            alt="accessories logo"
          />
          <p>accessories</p>
          <span>{amountAccessories}</span>
        </Link>
      </div>
    </div>
  );
};
