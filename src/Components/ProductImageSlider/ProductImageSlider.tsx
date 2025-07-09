import React, { useState } from 'react';
import './ProductImageSlider.scss';
import cn from 'classnames';
import { useTranslation } from '../../hooks/useTranslation';

type ProductImageSliderProps = {
  images: string[];
};

export const ProductImageSlider: React.FC<ProductImageSliderProps> = ({
  images,
}) => {
  const { translate } = useTranslation();

  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || !images.length) {
    return (
      <div className="product-main-slider__empty body-text">
        {translate('common', 'No images')}
      </div>
    );
  }

  return (
    <div className="product-image-slider">
      <div className="product-image-slider__small">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn('product-image-slider__smaller', {
              selected: selectedIndex === index,
            })}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image}
              alt={`small photo ${index + 1}`}
            />
          </button>
        ))}
      </div>
      <div className="product-image-slider__main">
        <img
          src={images[selectedIndex]}
          alt={`main photo ${selectedIndex + 1}`}
        />
      </div>
    </div>
  );
};
