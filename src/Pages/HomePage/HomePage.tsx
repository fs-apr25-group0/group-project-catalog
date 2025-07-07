import { ProductList } from '../../Components/ProductList';
import { Link } from 'react-router-dom';
import { useProductForHomePage } from '../../hooks/useProductsForHomePage';
import { MainSlider } from '../../Components/MainSlider';

export const HomePage = () => {
  const {
    loading,
    amountPhones,
    amountTablets,
    amountAccessories,
    newProducts,
    hotPriceProducts,
  } = useProductForHomePage();

  const startIndexForNew = 0;
  const endIndexForNew = startIndexForNew + 4;
  const visibleNewProducts = newProducts.slice(
    startIndexForNew,
    endIndexForNew,
  );

  const startIndexForHot = 0;
  const endIndexForHot = startIndexForHot + 4;
  const visibleHotProducts = hotPriceProducts.slice(
    startIndexForHot,
    endIndexForHot,
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <h1>Welcome to Nice Gadgets store!</h1>
        <MainSlider />
      </div>

      <div>
        <div>
          <h2>Brand new models</h2>
          <div>
            <button>scroll left</button>
            <button>scroll right</button>
          </div>
        </div>
        <ProductList visibleProducts={visibleNewProducts} />
      </div>

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

      <div>
        <div>
          <h2>Hot prices</h2>
          <div>
            <button>scroll left</button>
            <button>scroll right</button>
          </div>
        </div>
        <ProductList visibleProducts={visibleHotProducts} />
      </div>
    </div>
  );
};
