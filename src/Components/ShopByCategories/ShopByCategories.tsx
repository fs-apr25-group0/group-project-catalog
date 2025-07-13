import { useTranslationState } from '../../stateManagers/languageState';
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
  const { translate } = useTranslationState();

  return (
    <section className="categories">
      <h2 className="categories__title">{translate('Shop by category')}</h2>

      <div className="categories__list">
        <div className="category category--phones">
          <Link
            to="phones"
            className="category__block category__block--phones"
          />
          <Link
            to="phones"
            className="category__title-link"
          >
            <p className="category__title">{translate('Mobile phones')}</p>
          </Link>
          <span className="category__count">
            {amountPhones} {translate('models')}
          </span>
        </div>

        <div className="category category--tablets">
          <Link
            to="tablets"
            className="category__block category__block--tablets"
          />
          <Link
            to="tablets"
            className="category__title-link"
          >
            <p className="category__title">{translate('tablets')}</p>
          </Link>
          <span className="category__count">
            {amountTablets} {translate('models')}
          </span>
        </div>

        <div className="category category--accessories">
          <Link
            to="accessories"
            className="category__block category__block--accessories"
          />
          <Link
            to="accessories"
            className="category__title-link"
          >
            <p className="category__title">{translate('accessories')}</p>
          </Link>
          <span className="category__count">
            {amountAccessories} {translate('models')}
          </span>
        </div>
      </div>
    </section>
  );
};
