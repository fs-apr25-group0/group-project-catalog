import { useEffect, useState } from 'react';
import { getProduct } from '../../api/fetchProducts';
import type { Product } from '../../types/products';
import { helperToFindNewProducts } from '../../utils/helperToFindNewProducts';
import { ProductList } from '../../Components/ProductList';
import { helperToFindHotPrice } from '../../utils/helperToFindHotPrice';

export const HomePage = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [hotPriceProducts, setHotPriceProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    getProduct()
      .then((products) => {
        setNewProducts(helperToFindNewProducts(products));
        setHotPriceProducts(helperToFindHotPrice(products));
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <h1>Welcome to Nice Gadgets store!</h1>
        <div>
          <h2 style={{ color: 'red' }}>Pokachto hz kak tut eto delat`</h2>
        </div>
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
        <p style={{ color: 'red' }}>Here must be blocks with links</p>
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
