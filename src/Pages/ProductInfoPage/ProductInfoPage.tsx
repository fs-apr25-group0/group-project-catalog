import { Link } from 'react-router-dom';
import { Description } from '../../Components/Description';
import { TechSpecs } from '../../Components/TechSpecs';
import { UrlWay } from '../../Components/UrlWay';
import './ProductInfoPage.scss';
import { SliderForProduct } from '../../Components/SliderForProduct';
import { useGadget } from '../../hooks/useGadget';

export const ProductInfoPage = () => {
  const { category, itemId, loading, gadget, productsMayLike } = useGadget();

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
      <div className="url-back">
        <div className="url-back__icon-arrow"></div>
        <Link
          to="../"
          className="small-text title-grey"
        >
          Back
        </Link>
      </div>

      <h1>{`${gadget?.name}`}</h1>

      <div>
        <h2 style={{ color: 'green' }}>HERE MUST BE PICTURE BLOCK</h2>
      </div>

      <section>
        <section>
          <h2>About</h2>

          <Description gadget={gadget} />
        </section>

        <section>
          <h2>Tech specs</h2>
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
