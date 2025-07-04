import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../../api/fetchProducts';
import type { Product } from '../../types/products';

export const ProductsPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProduct()
      .then((products) => {
        console.log('Fetched products:', products);
        const filtered = products.filter(
          (product) => product.category === category,
        );
        console.log('Filtered products:', filtered);
        setProducts(filtered);
      })
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{category}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};
