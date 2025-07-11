import { NavLink } from 'react-router-dom';
import FavoritesLogo from '../../images/icons/favourites_heart_like.svg';
import BagLogo from '../../images/icons/shopping_bag_cart.svg';
// import './NavActionsDesktop.scss';

export const NavActionsDesktop = () => (
  <div className="nav__actions">
    <NavLink
      to="/favorites"
      className={({ isActive }) =>
        `nav__action-link ${isActive ? 'active' : ''}`
      }
      aria-label="Favorites"
    >
      <img
        src={FavoritesLogo}
        alt="Favorites"
        className="nav__action-icon"
      />
    </NavLink>
    <NavLink
      to="/cart"
      className={({ isActive }) =>
        `nav__action-link ${isActive ? 'active' : ''}`
      }
      aria-label="Cart"
    >
      <img
        src={BagLogo}
        alt="Cart"
        className="nav__action-icon"
      />
    </NavLink>
  </div>
);
