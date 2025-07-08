import './SliderForProduct.scss';
import type { Product } from '../../types/products';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { ProductCard } from '../ProductCard';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';

interface PropsSliderNewProduct {
  visibleProducts: Product[];
  title: string;
  productType: 'phones' | 'tablets' | 'accessories';
  sortBy: 'newest' | 'hotPrices';
  itemsToShow?: number;
}

export const SliderForProduct = ({
  visibleProducts,
  title,
  productType,
  sortBy,
  itemsToShow,
}: PropsSliderNewProduct) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const filtered = visibleProducts.filter(
    (product) => product.category === productType,
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.year).getTime() - new Date(a.year).getTime();
    }

    if (sortBy === 'hotPrices') {
      const discountA = (a.fullPrice ?? 0) - (a.price ?? 0);
      const discountB = (b.fullPrice ?? 0) - (b.price ?? 0);
      return discountB - discountA;
    }
    return 0;
  });

  const visible =
    sortBy === 'hotPrices' ?
      sorted.filter((p) => (p.fullPrice ?? 0) > (p.price ?? 0))
    : sorted;

  console.log('visible.length', visible.length, 'itemsToShow', itemsToShow);

  const onSwiperInit = (swiper: SwiperType) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const onSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section className="slider-for-product">
      <div className="slider-header">
        <h2>{title}</h2>
        <div className="slider-navigation-buttons">
          <ButtonArrow
            direction="left"
            disabled={isBeginning}
            aria-label="Scroll left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <ButtonArrow
            direction="right"
            disabled={isEnd}
            aria-label="Scroll right"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>

      <Swiper
        onSwiper={onSwiperInit}
        onSlideChange={onSlideChange}
        slidesPerView={itemsToShow}
        spaceBetween={16}
        loop={false}
        className="my-swiper"
      >
        {visible.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              product={product}
              category={productType}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
