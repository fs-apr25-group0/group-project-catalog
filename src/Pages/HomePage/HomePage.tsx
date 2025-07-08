import { useProductForHomePage } from '../../hooks/useProductsForHomePage';
import { MainSlider } from '../../Components/MainSlider';
import { ShopByCategory } from '../../Components/ShopByCategories';
import { SliderForProduct } from '../../Components/SliderForProduct';

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
    <main>
      <div>
        <h1>Welcome to Nice Gadgets store!</h1>
        <MainSlider />
      </div>

      <SliderForProduct
        visibleProducts={visibleNewProducts}
        title={'Brand new models'}
      />

      <ShopByCategory
        amountPhones={amountPhones}
        amountTablets={amountTablets}
        amountAccessories={amountAccessories}
      />

      <SliderForProduct
        visibleProducts={visibleHotProducts}
        title={'Hot prices'}
      />
    </main>
  );
};
