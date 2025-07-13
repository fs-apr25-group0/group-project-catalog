import './Footer.scss';
import { Link } from 'react-router-dom';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
import { LogoShop } from '../../ui/LogoShop';
import { useTranslationState } from '../../stateManagers/languageState';

export const Footer = () => {
  const { translate } = useTranslationState();

  return (
    <footer className="footer">
      <LogoShop />

      <nav className="footer__nav">
        <a
          href="https://github.com/"
          className={`footer__link`}
        >
          {translate('GITHUB')}
        </a>
        <Link
          to="/tablets"
          className={`footer__link`}
        >
          {translate('CONTACTS')}
        </Link>
        <Link
          to="/accessories"
          className={`footer__link`}
        >
          {translate('RIGHTS')}
        </Link>
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
