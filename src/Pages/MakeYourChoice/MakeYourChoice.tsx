import '../MakeYourChoice/MakeYourChoice.scss';
import { useThemeState } from '../../stateManagers/themeState';
import { useNavigate } from 'react-router-dom';
import { useTranslationState } from '../../stateManagers/languageState';

export const MakeYourChoice = () => {
  const { theme } = useThemeState();
  const navigate = useNavigate();
  const { translate } = useTranslationState();

  return (
    <section className={`make-your-choice make-your-choice--${theme}`}>
      <div
        className={`make-your-choice__content make-your-choice__content--${theme}`}
      >
        <p className="make-your-choice__message">
          {translate(
            "Sorry, unfortunately we can't sell you the product right now, but we can offer to help our defenders.",
          )}
        </p>

        {/* 👇 ця обгортка важлива */}
        <div className="make-your-choice__buttons">
          <button
            className="make-your-choice__button--back"
            onClick={() => navigate(-1)}
          >
            {translate('Back to Store')}
          </button>
          <button
            className="make-your-choice__button--help"
            onClick={() => alert('Thank you for helping!')}
          >
            {translate('Help')}
          </button>
        </div>
      </div>
    </section>
  );
};
