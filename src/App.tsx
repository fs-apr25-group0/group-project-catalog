import './App.scss';
import logo from './images/logo.svg';
import FavoritesLogo from './images/icons/favourites_heart_like.svg';
import BagLogo from './images/icons/shopping_bag_cart.svg';
import BurgerIcon from './images/icons/menu.svg';
import CloseIcon from './images/icons/close.svg';
import { NavLink, Outlet } from 'react-router-dom';
import { ButtonArrow } from './ui/ButtonArrow/ButtonArrow';
import { useTranslation } from './hooks/useTranslation';
import { useEffect, useState } from 'react';

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

export const App = () => {
  const { language, setLanguage } = useTranslation();
  const isMobile = useMobile();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'en' | 'ua');
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <div className="App">
      <header
        className="header"
        id="header"
      >
        <div className="header__container">
          <NavLink
            to="/"
            className="header__logo"
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
                <img
                  src={BurgerIcon}
                  alt="Menu"
                />
              </button>
              {isMenuOpen && (
                <div className="mobile-menu">
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
                    <button
                      className="mobile-menu__close"
                      onClick={() => setMenuOpen(false)}
                      aria-label="Close menu"
                    >
                      <img
                        src={CloseIcon}
                        alt="Close menu"
                      />
                    </button>
                  </div>

                  <nav className="mobile-menu__nav">
                    <NavLink
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? 'nav__link nav__link--active' : 'nav__link'
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/phones"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? 'nav__link nav__link--active' : 'nav__link'
                      }
                    >
                      Phones
                    </NavLink>
                    <NavLink
                      to="/tablets"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? 'nav__link nav__link--active' : 'nav__link'
                      }
                    >
                      Tablets
                    </NavLink>
                    <NavLink
                      to="/accessories"
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? 'nav__link nav__link--active' : 'nav__link'
                      }
                    >
                      Accessories
                    </NavLink>
                  </nav>

                  <div className="mobile-menu__actions">
                    <NavLink
                      to="/favorites"
                      className="mobile-menu__icon"
                      onClick={() => setMenuOpen(false)}
                    >
                      <img
                        src={FavoritesLogo}
                        alt="Favorites"
                      />
                    </NavLink>
                    <NavLink
                      to="/cart"
                      className="mobile-menu__icon"
                      onClick={() => setMenuOpen(false)}
                    >
                      <img
                        src={BagLogo}
                        alt="Cart"
                      />
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
                    Home
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/phones"
                    className={({ isActive }) =>
                      isActive ? 'nav__link nav__link--active' : 'nav__link'
                    }
                  >
                    Phones
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/tablets"
                    className={({ isActive }) =>
                      isActive ? 'nav__link nav__link--active' : 'nav__link'
                    }
                  >
                    Tablets
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/accessories"
                    className={({ isActive }) =>
                      isActive ? 'nav__link nav__link--active' : 'nav__link'
                    }
                  >
                    Accessories
                  </NavLink>
                </li>
              </ul>

              <div className="nav__right">
                <select
                  value={language}
                  onChange={handleChange}
                  aria-label="Select language"
                >
                  <option value="ua">UA</option>
                  <option value="en">EN</option>
                </select>

                <NavLink
                  to="/favorites"
                  className="nav__action-link"
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
                  className="nav__action-link"
                  aria-label="Cart"
                >
                  <img
                    src={BagLogo}
                    alt="Cart"
                    className="nav__action-icon"
                  />
                </NavLink>
              </div>
            </nav>
          }
        </div>
      </header>

      <main className="section">
        <Outlet />
      </main>

      <footer className="footer">
        <NavLink
          to="/"
          className="footer__logo"
        >
          <img
            src={logo}
            alt="Shop logo"
          />
        </NavLink>

        <nav className="footer__nav">
          <a
            href="https://github.com/"
            className="footer__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <NavLink
            to="/tablets"
            className="footer__link"
          >
            CONTACTS
          </NavLink>
          <NavLink
            to="/accessories"
            className="footer__link"
          >
            RIGHTS
          </NavLink>
        </nav>

        <div className="footer__to-top">
          <span className="footer__text uppercase">Back to top</span>
          <button
            className="footer__button"
            onClick={() => {
              const header = document.getElementById('header');
              if (header) {
                header.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Back to top"
          >
            <ButtonArrow direction="up" />
          </button>
        </div>
      </footer>
    </div>
  );
};
