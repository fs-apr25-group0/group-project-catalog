import './HomePage.scss';
import { useProductForHomePage } from '../../hooks/useProductsForHomePage';
import { MainSlider } from '../../Components/MainSlider';
import { ShopByCategory } from '../../Components/ShopByCategories';
import { SliderForProduct } from '../../Components/SliderForProduct';
import { useTranslation } from '../../hooks/useTranslation';

export const HomePage = () => {
  const {
    loading,
    amountPhones,
    amountTablets,
    amountAccessories,
    newProducts,
    hotPriceProducts,
  } = useProductForHomePage();

  const { translate } = useTranslation();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <div>
        <div className="page-title">
          <h1>{translate('common', 'Welcome to Nice Gadgets store!')}</h1>
        </div>
        <MainSlider />
      </div>

      <SliderForProduct
        visibleProducts={newProducts}
        title={translate('common', 'Brand new models')}
      />

      <ShopByCategory
        amountPhones={amountPhones}
        amountTablets={amountTablets}
        amountAccessories={amountAccessories}
      />

      <SliderForProduct
        visibleProducts={hotPriceProducts}
        title={translate('common', 'Hot prices')}
      />
    </main>
  );
};
