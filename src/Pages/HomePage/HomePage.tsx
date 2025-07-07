import { ProductList } from '../../Components/ProductList';
import { useProductForHomePage } from '../../hooks/useProductsForHomePage';
import { MainSlider } from '../../Components/MainSlider';
import { ShopByCategory } from '../../Components/ShopByCategories';

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

      <ShopByCategory
        amountPhones={amountPhones}
        amountTablets={amountTablets}
        amountAccessories={amountAccessories}
      />

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
