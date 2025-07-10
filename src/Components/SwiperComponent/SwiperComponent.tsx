import { Swiper, SwiperSlide, type SwiperClass } from 'swiper/react';
import '../SliderForProduct/SliderForProduct.scss';
import { ProductCard } from '../ProductCard';
import type { Product } from '../../types/products';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import 'swiper/css';
// @ts-expect-error
import 'swiper/css/pagination';
// @ts-expect-error
import 'swiper/css/navigation';
/* eslint-enable @typescript-eslint/ban-ts-comment */

type Props = {
  products: Product[];
  onSwiperInit?: (swiper: SwiperClass) => void;
};

export const SwiperComponent: React.FC<Props> = ({
  products,
  onSwiperInit,
}) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={16}
      slidesPerGroup={1}
      loop={false}
      className="my-swiper"
      onSwiper={(swiper) => {
        onSwiperInit?.(swiper);
      }}
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
