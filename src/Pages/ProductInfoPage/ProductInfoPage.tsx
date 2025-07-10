import { Description } from '../../Components/Description';
import { TechSpecs } from '../../Components/TechSpecs';
import { UrlWay } from '../../Components/UrlWay';
import './ProductInfoPage.scss';
import { SliderForProduct } from '../../Components/SliderForProduct';
import { useGadget } from '../../hooks/useGadget';
import { LinkBack } from '../../Components/LinkBack';

import { ProductImageSlider } from '../../Components/ProductImageSlider';
/**/
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import type { Product } from '../../types/products';
import { ColorPicker } from '../../ui/ColorPicker/ColorPicker';
import cn from 'classnames';
import { ButtonAdd } from '../../ui/ButtonAdd';
import { ButtonFavorite } from '../../ui/ButtonFavorite';

import { useTranslation } from '../../hooks/useTranslation';
import { appleColors } from '../../constans/appleColors';

export const ProductInfoPage = () => {
  const { category, itemId, loading, gadget, productsMayLike, gadgets } =
    useGadget();

  const { translate } = useTranslation();

  const startIndexByMayLike = 0;
  const endIndexByMayLike = startIndexByMayLike + 4;
  const visibleMayLikeProducts = productsMayLike.slice(
    startIndexByMayLike,
    endIndexByMayLike,
  );

  const { productInCart, setProductInCart } = useContext(CartContext);
  const { productInFavorite, setProductInFavorite } =
    useContext(FavoriteContext);
  const navigate = useNavigate();

  const isInCart = productInCart.some(
    (product: Product) => product.itemId === gadget?.id,
  );
  const isInFavorite = productInFavorite.some(
    (product: Product) => product.itemId === gadget?.id,
  );

  const currentProduct = productsMayLike.find(
    (product: Product) => product.itemId === gadget?.id,
  );

  const handleAddToCart = () => {
    if (!currentProduct) {
      return;
    }
    setProductInCart(currentProduct);
  };
  const handleAddToFavorite = () => {
    if (!currentProduct) {
      return;
    }
    setProductInFavorite(currentProduct);
  };

  const selectedColor = gadget?.color;
  const selectedCapacity = gadget?.capacity;

  const hadleChangeVariant = (
    color: string | undefined,
    capacity: string | undefined,
  ) => {
    if (!gadget) {
      return;
    }

    const found = gadgets.find(
      (g) => g.color === color && g.capacity === capacity,
    );

    if (found) {
      navigate(`/${category}/${found.id}`);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const images = gadget?.images || [];
  const colors = gadget?.colorsAvailable || [];
  const capacities = gadget?.capacityAvailable || [];
  const price = gadget?.priceDiscount || gadget?.priceRegular;
  const oldPrice = gadget?.priceDiscount ? gadget.priceRegular : null;

  return (
    <main>
      <UrlWay
        category={category}
        itemId={itemId}
      />

      <div className="product-info-back">
        <LinkBack />
      </div>

      <h2 className="product-info-title">{`${gadget?.name}`}</h2>

      <div className="product-info-block">
        {/* <h2 style={{ color: 'green' }}>HERE MUST BE PICTURE BLOCK</h2> */}
        <div className="product-info-block__left">
          <ProductImageSlider images={images} />
        </div>
        <div className="product-info-block-right">
          <div className="product-info-block__top-row">
            <span className="product-info-block__label small-text">
              Available colors
            </span>
            <span className="product-info-block__id small-text">
              ID: {gadget?.id}
            </span>
          </div>

          <ColorPicker
            colors={colors}
            selectedColor={selectedColor || ''}
            onSelect={(color) => {
              hadleChangeVariant(color, selectedCapacity);
            }}
            colorMap={appleColors}
          />
          <div className="product-info-block__divider" />

          <span className="product-info-block__label small-text">
            Select Capacity
          </span>
          <div className="product-info-block__capacities">
            {capacities.map((capacity) => (
              <button
                key={capacity}
                className={cn('product-info-block__capacity-button', {
                  selected: selectedCapacity == capacity,
                })}
                onClick={() => {
                  hadleChangeVariant(selectedColor, capacity);
                }}
              >
                {capacity}
              </button>
            ))}
          </div>
          <div className="product-info-block__divider" />
          <div className="product-info-block__price-row">
            <h2 className="product-info-block__price">${price}</h2>
            {oldPrice && (
              <span className="product-info-block__old-price">${oldPrice}</span>
            )}
          </div>
          <div className="product-info-block__actions">
            <ButtonAdd
              isActive={isInCart}
              onClick={handleAddToCart}
            />
            <ButtonFavorite
              isActive={isInFavorite}
              onClick={handleAddToFavorite}
            />
          </div>
          <div className="product-info-block__short-specs">
            <div className="product-info-block__spec-row">
              <span className="product-info-block__spec-label small-text">
                Screen
              </span>{' '}
              <span className="product-info-block__spec-value small-text">
                {gadget?.screen}
              </span>
            </div>
            <div className="product-info-block__spec-row">
              <span className="product-info-block__spec-label small-text">
                Resolution
              </span>{' '}
              <span className="product-info-block__spec-value small-text">
                {gadget?.resolution}
              </span>
            </div>
            <div className="product-info-block__spec-row">
              <span className="product-info-block__spec-label small-text">
                Processor
              </span>{' '}
              <span className="product-info-block__spec-value small-text">
                {gadget?.processor}
              </span>
            </div>
            <div className="product-info-block__spec-row">
              <span className="product-info-block__spec-label small-text">
                RAM
              </span>{' '}
              <span className="product-info-block__spec-value small-text">
                {gadget?.ram}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="product-info-block__details">
        <section>
          <h3 className="product-info-block__details__about">
            {translate('common', 'About')}
          </h3>
          <div className="product-info-block__about-divider"></div>
          <Description gadget={gadget} />
        </section>
        <section>
          <section className="techspecs__header">
            <h3 className="product-info-block__details__techspecs">
              {translate('common', 'Tech specs')}
            </h3>
            <div className="techspecs__divider"></div>
          </section>
          <TechSpecs gadget={gadget} />
        </section>
      </div>

      <SliderForProduct
        visibleProducts={visibleMayLikeProducts}
        title={'You may also like'}
      />
    </main>
  );
};
