import React, { useRef } from 'react';
import './MainSlider.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';

import { NavLink } from 'react-router-dom';

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import 'swiper/css';
// @ts-expect-error
import 'swiper/css/pagination';
// @ts-expect-error
import 'swiper/css/navigation';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
/* eslint-enable @typescript-eslint/ban-ts-comment */

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

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="main-slider">
      <ButtonArrow
        direction={'left'}
        onClick={handlePrev}
      />

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

      <ButtonArrow
        direction={'right'}
        onClick={handleNext}
      />
    </div>
  );
};
