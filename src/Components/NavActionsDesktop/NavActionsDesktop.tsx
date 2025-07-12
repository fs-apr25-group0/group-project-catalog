import { NavLink } from 'react-router-dom';
import { HeaderIcons } from '../HeaderIcons';
import './NavActionsDesktop.scss';

export const NavActionsDesktop = () => (
  <div className="nav__actions">
    <NavLink
      to="/favorites"
      className={({ isActive }) =>
        `nav__action-link ${isActive ? 'active' : ''}`
      }
      aria-label="Favorites"
    >
      <HeaderIcons type="favorites" />
    </NavLink>
    <NavLink
      to="/cart"
      className={({ isActive }) =>
        `nav__action-link ${isActive ? 'active' : ''}`
      }
      aria-label="Cart"
    >
      <HeaderIcons type="card" />
    </NavLink>
  </div>
);
