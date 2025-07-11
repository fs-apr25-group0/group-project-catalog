import { NavLink } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
// import './NavHeader.scss';

const links = ['/', '/phones', '/tablets', '/accessories'];
const names = ['Home', 'Phones', 'Tablets', 'Accessories'];

export const NavHeader = () => {
  const { translate } = useTranslation();

  return (
    <nav
      className="nav"
      aria-label="Main navigation"
    >
      <ul className="nav__list">
        {links.map((path, i) => (
          <li
            className="nav__item"
            key={path}
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? 'nav__link nav__link--active' : 'nav__link'
              }
            >
              {translate('common', names[i])}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
