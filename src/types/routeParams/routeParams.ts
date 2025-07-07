import type { CategoryVariants } from '../categoryVariants';

export type RouteParams = {
  category: CategoryVariants | undefined;
  itemId: string | undefined;
};
