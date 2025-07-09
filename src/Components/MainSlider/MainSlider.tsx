import React, { useRef } from 'react';
import './MainSlider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';

import { NavLink } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const slides = [
  {
    imagePath: '/img/banner-phones.png',
    imageTitle: 'banner-phones',
    link: '/phones',
  },
  {
    imagePath: '/img/banner-tablets.png',
    imageTitle: 'banner-tablets',
    link: '/tablets',
  },
  {
    imagePath: '/img/banner-accessories.png',
    imageTitle: 'banner-accessories',
    link: '/accessories',
  },
];

export const MainSlider: React.FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className="main-slider">
      <button
        className="main-slider__arrow main-slider__arrow--left"
        type="button"
        onClick={() => swiperRef.current?.swiper.slidePrev()}
        aria-label="Previous slide"
      >
        <img
          src="/src/images/icons/chevron_arrow_left.svg"
          alt="prev"
        />
      </button>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
        }}
        loop
        className="main-slider__swiper"
        ref={swiperRef}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <NavLink
              to={slide.link}
              className="main-slider__link"
            >
              <img
                src={slide.imagePath}
                alt={slide.imageTitle}
                className="main-slider__image"
              />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="main-slider__arrow main-slider__arrow--right"
        type="button"
        onClick={() => swiperRef.current?.swiper.slideNext()}
        aria-label="Next slide"
      >
        <img
          src="/src/images/icons/chevron_arrow_right.svg"
          alt="next"
        />
      </button>
    </div>
  );
};
