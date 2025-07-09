import { Description } from '../../Components/Description';
import { TechSpecs } from '../../Components/TechSpecs';
import { UrlWay } from '../../Components/UrlWay';
import './ProductInfoPage.scss';
import { SliderForProduct } from '../../Components/SliderForProduct';
import { useGadget } from '../../hooks/useGadget';
import { LinkBack } from '../../Components/LinkBack';

import { ProductImageSlider } from '../../Components/ProductImageSlider';
import { useTranslation } from '../../hooks/useTranslation';

export const ProductInfoPage = () => {
  const { category, itemId, loading, gadget, productsMayLike } = useGadget();
  const { translate } = useTranslation();

  const startIndexByMayLike = 0;
  const endIndexByMayLike = startIndexByMayLike + 4;
  const visibleMayLikeProducts = productsMayLike.slice(
    startIndexByMayLike,
    endIndexByMayLike,
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <UrlWay
        category={category}
        itemId={itemId}
      />

      <LinkBack />

      <h1>{`${gadget?.name}`}</h1>

      <div>
        <ProductImageSlider images={gadget?.images || []} />
      </div>

      <section>
        <section>
          <h2>{translate('common', 'About')}</h2>

          <Description gadget={gadget} />
        </section>

        <section>
          <h2>{translate('common', 'Tech specs')}</h2>
          <TechSpecs gadget={gadget} />
        </section>
      </section>

      <SliderForProduct
        visibleProducts={visibleMayLikeProducts}
        title={'You may also like'}
      />
    </main>
  );
};
