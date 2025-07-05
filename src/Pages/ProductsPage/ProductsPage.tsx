import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../../api/fetchProducts';
import type { Product } from '../../types/products';
import { Pagination } from '../../Components/Pagination/Pagination';
import { ProductList } from '../../Components/ProductList';

export const ProductsPage = () => {
  const { category, itemId } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const visibleProducts = products.slice(startIndex, endIndex);

  const amountProduct = products.length;

  useEffect(() => {
    getProduct()
      .then((products) => {
        console.log('Fetched products:', products);
        const filtered = products.filter(
          (product) => product.category === category,
        );
        console.log('Filtered products:', filtered);
        setProducts(filtered);
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <NavLink to={'/'}>Home</NavLink>
        <img
          src="*"
          alt="space zone"
        />
        <NavLink to={'../'}>{category}</NavLink>
        {itemId && (
          <>
            <img
              src="*"
              alt="space zone"
            />
            <p>Here must be name of product</p>
          </>
        )}
      </div>
      {itemId ?
        <Outlet />
      : <div>
          {category === 'phones' ?
            <h1>Mobile {category}</h1>
          : <h1>{category}</h1>}

          <p>{amountProduct} models</p>

          <div>
            <p>Sort by</p>
            <select>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
              <option value="Chip">Chip</option>
              <option value="Expensive">Expensive</option>
            </select>
          </div>

          <div>
            <p>Items on page</p>
            <select
              value={perPage}
              onChange={(event) => {
                setPerPage(+event.target.value);
                setCurrentPage(1);
              }}
            >
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="16">16</option>
            </select>
          </div>

          <ProductList visibleProducts={visibleProducts} />

          <Pagination
            amountProduct={amountProduct}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      }
    </div>
  );
};
