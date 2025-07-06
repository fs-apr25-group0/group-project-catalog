import type { CategoryVariants } from '../categoryVariants';

export type Product = {
  id: number;
  category: CategoryVariants;
  itemId: string;
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
};
