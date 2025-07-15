import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './NavigationMain.scss';
import { useAsideState } from '../../stateManagers/asideState';
import { useTranslationState } from '../../stateManagers/languageState';

interface NavigationMain {
  isAside?: boolean;
}

const activeLink = ({ isActive }: { isActive: boolean }) =>
  cn('link', { link__active: isActive });

export const NavigationMain = ({ isAside = false }) => {
  const { closeAside } = useAsideState();
  const { translate } = useTranslationState();

  return (
    <ul
      className={cn(
        isAside ? 'navigation-categories-aside' : 'navigation-categories',
      )}
    >
      <li>
        <NavLink
          to="/"
          className={activeLink}
          onClick={closeAside}
        >
          {translate('Home')}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/phones"
          className={activeLink}
          onClick={closeAside}
        >
          {translate('phones')}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tablets"
          className={activeLink}
          onClick={closeAside}
        >
          {translate('tablets')}
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/accessories"
          className={activeLink}
          onClick={closeAside}
        >
          {translate('accessories')}
        </NavLink>
      </li>
    </ul>
  );
};
