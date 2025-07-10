import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
import logo from '../../images/logo.svg';

export const Footer = () => {
  const { translate } = useTranslation();

  return (
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
  );
};
