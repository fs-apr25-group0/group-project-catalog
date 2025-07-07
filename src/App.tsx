import './App.scss';
import logo from './images/logo.svg';
import FavoritesLogo from './images/icons/favourites_heart_like.svg';
import BagLogo from './images/icons/shopping_bag_cart.svg';
import { NavLink, Outlet } from 'react-router-dom';

export const App = () => (
  <div className="App">
    <header className="header">
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

        <nav className="nav">
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

          <div className="nav__actions">
            <NavLink
              to="/favorites"
              className="nav__action-link"
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
            >
              <img
                src={BagLogo}
                alt="Cart"
                className="nav__action-icon"
              />
            </NavLink>
          </div>
        </nav>
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
        <a
          href="#"
          className="footer__button"
        >
          top
        </a>
      </div>
    </footer>
  </div>
);
