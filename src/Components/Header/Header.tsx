import './Header.scss';
import { useTranslation } from '../../hooks/useTranslation';
import { useNavigate } from 'react-router-dom';

import { NavHeader } from '../NavHeader/NavHeader';
import { NavActionsDesktop } from '../NavActionsDesktop/NavActionsDesktop';
import { BurgerButton } from '../BurgerButton/BurgerButton';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  const { language, setLanguage } = useTranslation();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;
    if (selectedLang === 'ru') {
      navigate('/russians-are-not-people');
      return;
    }
    setLanguage(selectedLang as 'ua' | 'en');
  };

  return (
    <header
      className="header"
      id="header"
    >
      <input
        type="checkbox"
        id="menu-toggle"
        className="menu-toggle"
        hidden
      />
      <div className="header__container">
        <Logo />
        <div className="header__desktop">
          <NavHeader />
          <NavActionsDesktop />
        </div>
        <BurgerButton />
        <MobileMenu
          handleChange={handleChange}
          language={language}
        />
      </div>
    </header>
  );
};
