import './SliderForProduct.scss';
import type { Product } from '../../types/products';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
import { SwiperComponent } from '../SwiperComponent';

interface PropsSliderNewProduct {
  visibleProducts: Product[];
  title: string;
}

export const SliderForProduct = ({
  visibleProducts,
  title,
}: PropsSliderNewProduct) => {
  return (
    <section className="slider-for-product">
      <div className="slider-header">
        <h2>{title}</h2>
        <div className="slider-navigation-buttons">
          <ButtonArrow
            direction="left"
            disabled={true}
            aria-label="Scroll left"
            onClick={() => {}}
          />
          <ButtonArrow
            direction="right"
            disabled={true}
            aria-label="Scroll right"
            onClick={() => {}}
          />
        </div>
      </div>

      <SwiperComponent products={visibleProducts} />
    </section>
  );
};
