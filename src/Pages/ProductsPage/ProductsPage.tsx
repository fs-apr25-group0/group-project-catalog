import './ProductsPage.scss';
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
    <main className="products-page">
      {itemId ?
        <Outlet />
      : <section className="products-page__container">
          <div className="products-page__url-way">
            <UrlWay category={category} />
          </div>

          <div className="products-page__header">
            <h1>{category === 'phone' ? `Mobile ${category}` : category}</h1>
          </div>

          <p className="products-page__count">{amountProduct} models</p>

          <div className="products-page__filter-panel">
            <div className="products-page__filter-panel__group">
              <p className="products-page__filter-panel__label">Sort by</p>
              <select className="products-page__filter-panel__select">
                <option value="Newest">Newest</option>
                <option value="Oldest">Oldest</option>
                <option value="Chip">Chip</option>
                <option value="Expensive">Expensive</option>
              </select>
            </div>

            <div className="products-page__filter-panel__group">
              <p className="products-page__filter-panel__label">
                Items on page
              </p>
              <select
                className="products-page__filter-panel__select"
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
          </div>

          <div className="products-page__product-list">
            <ProductList visibleProducts={visibleProducts} />
          </div>

          <Pagination
            amountProduct={amountProduct}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </section>
      }
    </main>
  );
};
