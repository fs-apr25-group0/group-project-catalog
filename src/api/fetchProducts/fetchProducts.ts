import type { Product } from '../../types/products';

const API_URL = 'http://localhost:5173/api/products.json';

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function getProduct(): Promise<Product[]> {
  return wait(500)
    .then(() => fetch(API_URL))
    .then((response) => response.json());
}
