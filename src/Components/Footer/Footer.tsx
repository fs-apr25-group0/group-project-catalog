import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
import { useThemeState } from '../../stateManagers/themeState';
import logoLight from '../../images/logo.svg';
import logoDark from '../../images/Logo-dark.svg';

export const Footer = () => {
  const { translate } = useTranslation();
  const { theme } = useThemeState();

  return (
    <footer className="footer">
      <NavLink
        to="/"
        className="footer__logo"
      >
        <img
          src={theme === 'light' ? logoLight : logoDark}
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
  );
};
