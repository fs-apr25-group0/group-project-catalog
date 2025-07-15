import './Footer.scss';
import { Link } from 'react-router-dom';
import { ButtonArrow } from '../../ui/ButtonArrow/ButtonArrow';
import { LogoShop } from '../../ui/LogoShop';
import { useTranslationState } from '../../stateManagers/languageState';

export const Footer = () => {
  const { translate } = useTranslationState();

  return (
    <footer className="footer">
      <div className="footer__grid">
        <LogoShop />
        <nav className="footer__nav">
          <a href="https://github.com/">{translate('GITHUB')}</a>
          <Link to="/tablets">{translate('CONTACTS')}</Link>
          <Link to="/accessories">{translate('RIGHTS')}</Link>
        </nav>
        <div className="footer__to-top">
          <span>{translate('Back to top')}</span>

          <ButtonArrow
            icon="arrow"
            direction="up"
          />
        </div>
      </div>
    </footer>
  );
};
