import './ProductsPage.scss';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { ProductList } from '../../Components/ProductList';
import { Pagination } from '../../Components/Pagination';
import { useProductForCategories } from '../../hooks/useProductsForCategories';
import { UrlWay } from '../../Components/UrlWay';
import type { SortType } from '../../types/sortType';
import { sortVariants, sortVariantsValues } from '../../constans/sortVariants';
import { helperToSortProducts } from '../../utils/helperToSortProducts';
import { Dropdown } from '../../ui/Dropdown';

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

  const sortedProducts = helperToSortProducts(products, sortBy);
  const visibleProducts = sortedProducts.slice(startIndex, endIndex);

  const paginationVariantsValues = [3, 5, 10, 16];

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
            <Dropdown
              title="Sort by"
              value={sortBy}
              onChange={handleSortChange}
              variants={sortVariantsValues}
            />

            <Dropdown
              title="Items on page"
              value={perPage}
              onChange={handlePerPageChange}
              variants={paginationVariantsValues}
            />
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
