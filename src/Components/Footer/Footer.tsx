import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
import { useThemeState } from '../../stateManagers/themeState';
import { LogoShop } from '../../ui/LogoShop';
import { useTranslationState } from '../../stateManagers/languageState';

export const Footer = () => {
  const { translate } = useTranslationState();
  const { theme } = useThemeState();

  return (
    <footer className="footer">
      <LogoShop />

      <nav className="footer__nav">
        <a
          href="https://github.com/"
          className={`footer__link footer__link--${theme}`}
        >
          {translate('GITHUB')}
        </a>
        <NavLink
          to="/tablets"
          className={`footer__link footer__link--${theme}`}
        >
          {translate('CONTACTS')}
        </NavLink>
        <NavLink
          to="/accessories"
          className={`footer__link footer__link--${theme}`}
        >
          {translate('RIGHTS')}
        </NavLink>
      </nav>

      <div className="footer__to-top">
        <span className="footer__text uppercase">
          {translate('Back to top')}
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
