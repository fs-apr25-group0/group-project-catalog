import type { Product } from '../../types/products';

export const helperToFindNewProducts = (products: Product[]): Product[] => {
  const maxYear = Math.max(...products.map((product) => product.year));
  const newProducts = products.filter((product) => product.year === maxYear);

  return newProducts;
};
