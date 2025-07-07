import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { Gadget } from '../../types/gadgets';
import { Description } from '../../Components/Description';
import { helperToFindProductsByCategory } from '../../utils/helperToFindProductsByCategory';
import { TechSpecs } from '../../Components/TechSpecs';
import { ProductList } from '../../Components/ProductList';
import type { Product } from '../../types/products';
import { getProduct } from '../../api/fetchProducts';
import { helperToFindMayLikeProducts } from '../../utils/helperToFindMayLikeProduct';
import { UrlWay } from '../../Components/UrlWay';

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
    <div>
      <UrlWay
        category={category}
        itemId={itemId}
      />
      <Link to="../">Back</Link>

      <h1>{`${gadget?.name}`}</h1>

      <div>
        <h2 style={{ color: 'green' }}>HERE MUST BE PICTURE BLOCK</h2>
      </div>

      <div>
        <div>
          <h2>About</h2>

          <Description gadget={gadget} />
        </div>

        <div>
          <h2>Tech specs</h2>
          <TechSpecs gadget={gadget} />
        </div>
      </div>

      <ProductList visibleProducts={visibleMayLikeProducts} />
    </div>
  );
};
