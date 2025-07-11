import './App.scss';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { ButtonTheme } from './ui/ButtonTheme';
import { useTranslation } from './hooks/useTranslation';
import { useThemeState } from './stateManagers/themeState';

export const App = () => {
  const { language, setLanguage } = useTranslation();
  const { theme } = useThemeState();
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = event.target.value;

    if (selectedLang === 'ru') {
      navigate('/russians-are-not-people');
      return;
    }
    setLanguage(selectedLang as 'en' | 'ua');
  };

  return (
    <div className={`App App--${theme}`}>
      <Header />

      <main className="section">
        <div>
          <select
            value={language}
            onChange={handleChange}
            className="nav__select"
          >
            <option value="ua">UA</option>
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
          <ButtonTheme />
        </div>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
