import favorites from '../../../images/icons/favourites_heart_like.svg';
import '../Icon.scss';

export const FavoritesIcon = () => {
  return (
    <img
      src={favorites}
      alt="Favorites"
      className="icon"
    />
  );
};
