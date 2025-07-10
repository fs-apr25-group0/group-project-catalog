import type { Product } from '../../types/products';

export const helperToFindNewProducts = (products: Product[]): Product[] => {
  const maxYear = Math.max(...products.map((product) => product.year));
  const newProducts = products.filter((product) => product.year === maxYear);
  const minCap = Math.min(...newProducts.map((p) => parseInt(p.capacity)));

  return newProducts.filter((p) => parseInt(p.capacity) === minCap);
};
