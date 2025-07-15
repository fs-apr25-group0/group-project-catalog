import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './NavigationMain.scss';
import { useAsideState } from '../../stateManagers/asideState';

interface NavigationMain {
  isAside?: boolean;
}

const activeLink = ({ isActive }: { isActive: boolean }) =>
  cn('link', { link__active: isActive });

export const NavigationMain = ({ isAside = false }) => {
  const { closeAside } = useAsideState();

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
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/phones"
          className={activeLink}
          onClick={closeAside}
        >
          phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tablets"
          className={activeLink}
          onClick={closeAside}
        >
          tablets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/accessories"
          className={activeLink}
          onClick={closeAside}
        >
          accessories
        </NavLink>
      </li>
    </ul>
  );
};
