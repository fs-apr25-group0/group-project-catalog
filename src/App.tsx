import './App.scss';
import logo from './images/logo.svg';
import FavoritesLogo from './images/icons/favourites_heart_like.svg';
import BagLogo from './images/icons/shopping_bag_cart.svg';
import { NavLink, Outlet } from 'react-router-dom';
import { ButtonArrow } from './ui/ButtonArrow/ButtonArrow';
import { useTranslation } from './hooks/useTranslation';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const { language, setLanguage, translate } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;

    if (selectedLang === 'ru') {
      navigate('/russians-are-not-people');
      return;
    }
    setLanguage(event.target.value as 'en' | 'ua');
  };
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

          <nav className="nav">
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
                  {translate('common', 'Phones')}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/tablets"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  {translate('common', 'Tablets')}
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/accessories"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link--active' : 'nav__link'
                  }
                >
                  {translate('common', 'Accessories')}
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
            <select
              value={language}
              onChange={handleChange}
            >
              <option value="ua">UA</option>
              <option value="en">EN</option>
              <option value="ru">RU</option>
            </select>
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
            {translate('common', 'GITHUB')}
          </a>
          <NavLink
            to="/tablets"
            className="footer__link"
          >
            {translate('common', 'CONTACTS')}
          </NavLink>
          <NavLink
            to="/accessories"
            className="footer__link"
          >
            {translate('common', 'RIGHTS')}
          </NavLink>
        </nav>

        <div className="footer__to-top">
          <span className="footer__text uppercase">
            {translate('common', 'Back to top')}
          </span>
          <button
            className="footer__button"
            onClick={() => {
              const header = document.getElementById('header');
              if (header) {
                header.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ButtonArrow direction="up" />
          </button>
        </div>
      </footer>
    </div>
  );
};
