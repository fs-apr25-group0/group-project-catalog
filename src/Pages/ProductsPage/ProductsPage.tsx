import './ProductsPage.scss';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { ProductList } from '../../Components/ProductList';
import { Pagination } from '../../Components/Pagination';
import { useProductForCategories } from '../../hooks/useProductsForCategories';
import { UrlWay } from '../../Components/UrlWay';
import type { SortType } from '../../types/sortType';
import { sortVariants } from '../../constans/sortVariants';

export const ProductsPage = () => {
  const {
    itemId,
    category,
    products,
    loading,
    amountProduct,
    selectedCategory,
  } = useProductForCategories();

  const [searchParams, setSearchParams] = useSearchParams();

  const perPage = Number(searchParams.get('perPage')) || 16;
  const currentPage = Number(searchParams.get('page')) || 1;
  const sortBy = (searchParams.get('sort') as SortType) || sortVariants.Newest;

  const categoryVariables = ['phones', 'tablets', 'accessories'];

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case sortVariants.Newest:
        return b.year - a.year;
      case sortVariants.Oldest:
        return a.year - b.year;
      case sortVariants.Cheap:
        return a.price - b.price;
      case sortVariants.Expensive:
        return b.price - a.price;
      default:
        return 0;
    }
  });
  const visibleProducts = sortedProducts.slice(startIndex, endIndex);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSort = event.target.value as SortType;
    searchParams.set('sort', newSort);
    setSearchParams(searchParams);
  };

  const handlePageChange = (page: number) => {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newPerPage = +event.target.value;
    searchParams.set('perPage', newPerPage.toString());
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };

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
              <select
                className="products-page__filter-panel__select"
                value={sortBy}
                onChange={handleSortChange}
              >
                {Object.values(sortVariants).map((variant) => (
                  <option
                    key={variant}
                    value={variant}
                  >
                    {variant}
                  </option>
                ))}
              </select>
            </div>

            <div className="products-page__filter-panel__group">
              <p className="products-page__filter-panel__label">
                Items on page
              </p>
              <select
                className="products-page__filter-panel__select"
                value={perPage}
                onChange={handlePerPageChange}
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
            onPageChange={handlePageChange}
          />
        </section>
      }
    </main>
  );
};
