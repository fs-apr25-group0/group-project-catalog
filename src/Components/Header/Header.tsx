import './Header.scss';
import { useTranslation } from '../../hooks/useTranslation';
import logo from '../../images/logo.svg';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { BurgerIcon } from '../Icon/BurgerButton';
import { CloseIcon } from '../Icon/CloseButton';
import { FavoritesIcon } from '../Icon/FavoritesIcon';
import { BagIcon } from '../Icon/BagIcon';

const useMobile = (breakpoint = 640) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
};

export const Header = () => {
  const { language, setLanguage, translate } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMobile();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  const isFavoritesActive = location.pathname === '/favorites';
  const isCartActive = location.pathname === '/cart';

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;

    if (selectedLang === 'ru') {
      navigate('/russians-are-not-people');
      return;
    }
    setLanguage(selectedLang as 'en' | 'ua');
  };

  return (
    <header
      className="header"
      id="header"
    >
      <div className="header__container">
        <NavLink
          to="/"
          className="header__logo"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="logo"
            src={logo}
            alt="Shop logo"
          />
        </NavLink>

        {isMobile ?
          <>
            <button
              className="burger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <BurgerIcon />
            </button>

            {isMenuOpen && (
              <div
                className="mobile-menu"
                role="dialog"
                aria-modal="true"
              >
                <div className="mobile-menu__header">
                  <NavLink
                    to="/"
                    className="mobile-menu__logo"
                    onClick={() => setMenuOpen(false)}
                  >
                    <img
                      src={logo}
                      alt="Shop logo"
                    />
                  </NavLink>

                  <div className="mobile-menu__actions-header">
                    <button
                      className="mobile-menu__close"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                </div>

                <nav className="mobile-menu__nav">
                  {['/', '/phones', '/tablets', '/accessories'].map(
                    (path, i) => {
                      const names = [
                        'Home',
                        'Phones',
                        'Tablets',
                        'Accessories',
                      ];
                      return (
                        <NavLink
                          key={path}
                          to={path}
                          onClick={() => setMenuOpen(false)}
                          className={({ isActive }) =>
                            isActive ?
                              'nav__link nav__link--active'
                            : 'nav__link'
                          }
                        >
                          {translate('common', names[i])}
                        </NavLink>
                      );
                    },
                  )}
                </nav>

                <div className="mobile-menu__actions">
                  <NavLink
                    to="/favorites"
                    className={`mobile-menu__icon ${
                      isFavoritesActive ? 'active' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Favorites"
                  >
                    <FavoritesIcon />
                  </NavLink>
                  <NavLink
                    to="/cart"
                    className={`mobile-menu__icon ${
                      isCartActive ? 'active' : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Cart"
                  >
                    <BagIcon />
                    <select
                      className="language-select"
                      value={language}
                      onChange={handleChange}
                    >
                      <option value="ua">UA</option>
                      <option value="en">EN</option>
                      <option value="ru">RU</option>
                    </select>
                  </NavLink>
                </div>
              </div>
            )}
          </>
        : <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  {translate('common', 'Home')}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/phones"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  {translate('common', 'phones')}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/tablets"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  {translate('common', 'tablets')}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/accessories"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  {translate('common', 'accessories')}
                </NavLink>
              </li>
            </ul>

            <div className="nav__actions">
              <NavLink
                to="/favorites"
                className={`nav__action-link ${
                  isFavoritesActive ? 'active' : ''
                }`}
                aria-label="Favorites"
              >
                <FavoritesIcon />
              </NavLink>
              <NavLink
                to="/cart"
                className={`nav__action-link ${isCartActive ? 'active' : ''}`}
                aria-label="Cart"
              >
                <BagIcon />
              </NavLink>
            </div>
          </nav>
        }
      </div>
    </header>
  );
};
