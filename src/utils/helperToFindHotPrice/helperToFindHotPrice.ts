import type { Product } from '../../types/products';

export const helperToFindHotPrice = (products: Product[]): Product[] => {
  const hotPriceProducts = products.filter(
    (product) => product.price !== product.fullPrice,
  );

  return hotPriceProducts;
};
