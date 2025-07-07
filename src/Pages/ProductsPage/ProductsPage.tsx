import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ProductList } from '../../Components/ProductList';
import { Pagination } from '../../Components/Pagination';
import { useProductForCategories } from '../../hooks/useProductsForCategories';
import { UrlWay } from '../../Components/UrlWay';

export const ProductsPage = () => {
  const {
    itemId,
    category,
    products,
    loading,
    amountProduct,
    selectedCategory,
  } = useProductForCategories();

  const [perPage, setPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categoryVariables = ['phones', 'tablets', 'accessories'];

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const visibleProducts = products.slice(startIndex, endIndex);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!categoryVariables.includes(selectedCategory)) {
    return <NavLink to={'*'}>Not found page</NavLink>;
  }

  return (
    <div>
      {itemId ?
        <Outlet />
      : <div>
          <UrlWay category={category} />
          {category === 'phone' ?
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
