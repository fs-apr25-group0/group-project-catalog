import { NavLink } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import CloseIcon from '../../images/icons/close.svg';
import { NavActionsMobile } from '../NavActionsMobile/NavActionsMobile';
import { Logo } from '../Logo';
import './MobileMenu.scss';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  language: string;
};

export const MobileMenu = ({ handleChange, language }: Props) => {
  const { translate } = useTranslation();

  const closeMenu = () => {
    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  const links = ['/', '/phones', '/tablets', '/accessories'];
  const names = ['Home', 'Phones', 'Tablets', 'Accessories'];

  return (
    <aside
      className="mobile-menu"
      role="dialog"
      aria-modal="true"
    >
      <div className="mobile-menu__header">
        <NavLink
          to="/"
          className="mobile-menu__logo"
          onClick={closeMenu}
        >
          <Logo />
        </NavLink>
        <label
          htmlFor="menu-toggle"
          className="mobile-menu__close"
          aria-label="Close menu"
          tabIndex={0}
        >
          <img
            src={CloseIcon}
            alt="Close menu"
          />
        </label>
      </div>

      <nav
        className="mobile-menu__nav"
        aria-label="Mobile navigation"
      >
        {links.map((path, i) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
            onClick={closeMenu}
          >
            {translate('common', names[i])}
          </NavLink>
        ))}
      </nav>

      <NavActionsMobile
        handleChange={handleChange}
        language={language}
      />
    </aside>
  );
};
