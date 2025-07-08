import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Gadget } from '../../types/gadgets';
import { Description } from '../../Components/Description';
import { helperToFindProductsByCategory } from '../../utils/helperToFindProductsByCategory';
import { TechSpecs } from '../../Components/TechSpecs';
import type { Product } from '../../types/products';
import { getProduct } from '../../api/fetchProducts';
import { helperToFindMayLikeProducts } from '../../utils/helperToFindMayLikeProduct';
import { UrlWay } from '../../Components/UrlWay';
import './ProductInfoPage.scss';
import { SliderForProduct } from '../../Components/SliderForProduct';

export const ProductInfoPage = () => {
  const { category, itemId } = useParams();
  const [loading, setLoading] = useState(true);
  const [gadget, setGadget] = useState<Gadget | null>(null);
  const [gadgets, setGadgets] = useState<Gadget[]>([]);
  const [productsMayLike, setProductsMayLike] = useState<Product[]>([]);

  useEffect(() => {
    if (!category || !itemId) {
      setLoading(false);
      return;
    }

    helperToFindProductsByCategory(category)
      .then((gadgets) => {
        const descriptions = gadgets
          .flatMap((gadget) => gadget.description.map((des) => des.title))
          .flat(Infinity);
        const uniqueDescriptions = [...new Set(descriptions)];
        console.log(uniqueDescriptions);
        const foundGadget = gadgets.find((gadget) => gadget.id === itemId);
        setGadget(foundGadget ?? null);
        const filteredByMayLike = gadgets.filter(
          (item) => item.namespaceId === gadget?.namespaceId,
        );
        setGadgets(filteredByMayLike);
      })
      .finally(() => setLoading(false));
  }, [category, gadget?.namespaceId, itemId]);

  useEffect(() => {
    getProduct()
      .then((products) => {
        setProductsMayLike(helperToFindMayLikeProducts(products, gadgets));
      })
      .finally(() => setLoading(false));
  }, [gadgets]);

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
