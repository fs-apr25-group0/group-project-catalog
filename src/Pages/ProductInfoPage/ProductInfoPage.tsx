import { Description } from '../../Components/Description';
import { TechSpecs } from '../../Components/TechSpecs';
import { UrlWay } from '../../Components/UrlWay';
import './ProductInfoPage.scss';
import { SliderForProduct } from '../../Components/SliderForProduct';
import { useGadget } from '../../hooks/useGadget';
import { LinkBack } from '../../Components/LinkBack';

import { ProductImageSlider } from '../../Components/ProductImageSlider';

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

      <LinkBack />

      <h1>{`${gadget?.name}`}</h1>

      <div className="product-info-block">
        {/* <h2 style={{ color: 'green' }}>HERE MUST BE PICTURE BLOCK</h2> */}
        <div className="product-info-block__left">
          <ProductImageSlider images={images} />
        </div>
        <div className="product-info-block-right">
          <div className="product-info-block__top-row">
            <span className="product-info-block__label">Available colors</span>
            {/* <span className="product-info-block__id">ID: {gadget?.id}</span> */}
          </div>

          <ColorPicker
            colors={colors}
            selectedColor={selectedColor || ''}
            onSelect={(color) => {
              hadleChangeVariant(color, selectedCapacity);
            }}
          />

          <span className="product-info-block__label">Select Capacity</span>
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
          <div className="product-info-block__price-row">
            <span className="product-info-block__price">${price}</span>
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
            <div>
              <span className="product-info-block__spec-label">Screen</span>{' '}
              {gadget?.screen}
            </div>
            <div>
              <span className="product-info-block__spec-label">Resolution</span>{' '}
              {gadget?.resolution}
            </div>
            <div>
              <span className="product-info-block__spec-label">Processor</span>{' '}
              {gadget?.processor}
            </div>
            <div>
              <span className="product-info-block__spec-label">RAM</span>{' '}
              {gadget?.ram}
            </div>
          </div>
        </div>
     
      </div>

      <section>
        <section>
          <h2>{translate('common', 'About')}</h2>

          <Description gadget={gadget} />
        </section>

        <section>
          <h2>{translate('common', 'Tech specs')}</h2>
          <TechSpecs gadget={gadget} />
        </section>
      </section>

      <SliderForProduct
        visibleProducts={visibleMayLikeProducts}
        title={'You may also like'}
      />
    </main>
  );
};
