import { useEffect, useState } from 'react';
import { getProduct } from '../../api/fetchProducts';
import type { Product } from '../../types/products';
import { helperToFindNewProducts } from '../../utils/helperToFindNewProducts';
import { ProductList } from '../../Components/ProductList';
import { helperToFindHotPrice } from '../../utils/helperToFindHotPrice';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const phones = products.filter((product) => product.category === 'phones');
  const amountPhones = phones.length;

  const tablets = products.filter((product) => product.category === 'tablets');
  const amountTablets = tablets.length;

  const accessories = products.filter(
    (product) => product.category === 'accessories',
  );
  const amountAccessories = accessories.length;

  const startIndexForNew = 0;
  const endIndexForNew = startIndexForNew + 4;
  const newProducts = helperToFindNewProducts(products);
  const visibleNewProducts = newProducts.slice(
    startIndexForNew,
    endIndexForNew,
  );

  const startIndexForHot = 0;
  const endIndexForHot = startIndexForHot + 4;
  const hotPriceProducts = helperToFindHotPrice(products);
  const visibleHotProducts = hotPriceProducts.slice(
    startIndexForHot,
    endIndexForHot,
  );

  useEffect(() => {
    getProduct()
      .then(setProducts)
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
