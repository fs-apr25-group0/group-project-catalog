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
// import cn from 'classnames';
import { ButtonAdd } from '../../ui/ButtonAdd';
import { ButtonFavorite } from '../../ui/ButtonFavorite';
import { appleColors } from '../../constans/appleColors';
import { useTranslationState } from '../../stateManagers/languageState';

export const ProductInfoPage = () => {
  const { category, itemId, loading, gadget, productsMayLike, gadgets } =
    useGadget();

  const { translate } = useTranslationState();

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

  const handleChangeVariant = (
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
    <div className="product-info-page">
      <div className="product-info-top">
        <LinkBack />
        <UrlWay
          category={category}
          itemId={itemId}
        />
      </div>
      <h2 className="product-info-title">{gadget?.name}</h2>

      <div className="product-info-main">
        <ProductImageSlider images={images} />

        <div className="product-info-aside">
          <div className="info-row">
            <span className="small-text">{translate('Available colors')}</span>
            <span className="small-text id-mobile">
              ID: {gadget?.namespaceId}
            </span>
          </div>

          <ColorPicker
            colors={colors}
            selectedColor={selectedColor || ''}
            onSelect={(color) => handleChangeVariant(color, selectedCapacity)}
            colorMap={appleColors}
          />

          <div className="divider" />

          <span className="small-text">{translate('Select Capacity')}</span>
          <div className="capacities">
            {capacities.map((capacity) => (
              <button
                key={capacity}
                className={selectedCapacity == capacity ? 'selected' : ''}
                onClick={() => handleChangeVariant(selectedColor, capacity)}
              >
                {capacity}
              </button>
            ))}
          </div>

          <div className="divider" />

          <div className="price-row">
            <h2>${price}</h2>
            {oldPrice && <span className="old">${oldPrice}</span>}
          </div>

          <div className="actions">
            <ButtonAdd
              isActive={isInCart}
              onClick={handleAddToCart}
            />
            <ButtonFavorite
              isActive={isInFavorite}
              onClick={handleAddToFavorite}
            />
          </div>

          <div className="shortspecs">
            <div>
              <span>{translate('screen')}</span>
              <span>{gadget?.screen}</span>
            </div>
            <div>
              <span>{translate('resolution')}</span>
              <span>{gadget?.resolution}</span>
            </div>
            <div>
              <span>{translate('processor')}</span>
              <span>{gadget?.processor}</span>
            </div>
            <div>
              <span>{translate('ram')}</span>
              <span>{gadget?.ram}</span>
            </div>
          </div>
          <span className="small-text id-desktop">
            ID: {gadget?.namespaceId}
          </span>
        </div>
      </div>

      <div className="product-info-details">
        <div>
          <h3>{translate('About')}</h3>
          <div className="divider" />
          <Description gadget={gadget} />
        </div>
        <div>
          <h3>{translate('Tech specs')}</h3>
          <div className="divider" />
          <TechSpecs gadget={gadget} />
        </div>
      </div>

      <SliderForProduct
        visibleProducts={productsMayLike}
        title={translate('You may also like')}
      />
    </div>
  );
};
