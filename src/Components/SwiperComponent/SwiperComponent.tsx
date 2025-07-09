import { Swiper, SwiperSlide } from 'swiper/react';
import '../SliderForProduct/SliderForProduct.scss';
import { ProductCard } from '../ProductCard';
import type { Product } from '../../types/products';

type Props = {
  products: Product[];
};

export const SwiperComponent: React.FC<Props> = ({ products }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={16}
      loop={false}
      className="my-swiper"
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
            product={product}
            category={product.category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
