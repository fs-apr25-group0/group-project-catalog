import { NavLink } from 'react-router-dom';
import { HeaderIcons } from '../HeaderIcons';
import './NavActionsMobile.scss';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  language: string;
};

export const NavActionsMobile = ({ handleChange, language }: Props) => {
  const closeMenu = () => {
    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="mobile-menu__actions">
      <NavLink
        to="/favorites"
        className={({ isActive }) =>
          `mobile-menu__icon ${isActive ? 'active' : ''}`
        }
        aria-label="Favorites"
        onClick={closeMenu}
      >
        <HeaderIcons type="favorites" />
      </NavLink>

      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `mobile-menu__icon ${isActive ? 'active' : ''}`
        }
        aria-label="Cart"
        onClick={closeMenu}
      >
        <HeaderIcons type="card" />
      </NavLink>

      <select
        className="language-select"
        value={language}
        onChange={handleChange}
      >
        <option value="ua">UA</option>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};
