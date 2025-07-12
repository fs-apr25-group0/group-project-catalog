import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import './NavigationMain.scss';

interface NavigationMain {
  isAside?: boolean;
}

const activeLink = ({ isActive }: { isActive: boolean }) =>
  cn('link', { link__active: isActive });

export const NavigationMain = ({ isAside = false }) => {
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
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/phones"
          className={activeLink}
        >
          phones
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/tablets"
          className={activeLink}
        >
          tablets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/accessories"
          className={activeLink}
        >
          accessories
        </NavLink>
      </li>
    </ul>
  );
};
