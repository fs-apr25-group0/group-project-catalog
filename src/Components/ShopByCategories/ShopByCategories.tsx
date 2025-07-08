import './ShopByCategoties.scss';
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
    <section className="categories">
      <h2 className="categories__title">Shop by category</h2>

      <div className="categories__list">
        <div className="category category--phones">
          <Link
            to="phones"
            className="category__block category__block--phones"
          />
          <p className="category__title">Mobile phones</p>
          <span className="category__count">{amountPhones} models</span>
        </div>

        <div className="category category--tablets">
          <Link
            to="tablets"
            className="category__block category__block--tablets"
          />
          <p className="category__title">Tablets</p>
          <span className="category__count">{amountTablets} models</span>
        </div>

        <div className="category category--accessories">
          <Link
            to="accessories"
            className="category__block category__block--accessories"
          />
          <p className="category__title">Accessories</p>
          <span className="category__count">{amountAccessories} models</span>
        </div>
      </div>
    </section>
  );
};
