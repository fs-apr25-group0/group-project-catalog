import { NavLink } from 'react-router-dom';
import { HeaderIcons } from '../HeaderIcons';
import cn from 'classnames';
import './NavigationCartFavourite.scss';

interface NavigationCartFavoriteProps {
  isAside?: boolean;
}

const activeLink = ({ isActive }: { isActive: boolean }) =>
  cn('link-cart', { 'link-cart__active': isActive });

export const NavigationCartFavorite: React.FC<NavigationCartFavoriteProps> = ({
  isAside = false,
}) => {
  return (
    <ul className={cn(isAside ? 'navigation-cart-aside' : 'navigation-cart')}>
      <li className="navigation-cart__item">
        <NavLink
          to="/favorites"
          className={activeLink}
        >
          <HeaderIcons type="favorites" />
        </NavLink>
      </li>
      <li className="navigation-cart__item">
        <NavLink
          to="/cart"
          className={activeLink}
        >
          <HeaderIcons type="card" />
        </NavLink>
      </li>
    </ul>
  );
};
