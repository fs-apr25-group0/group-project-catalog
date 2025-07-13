import { NavigationCartFavorite } from '../NavigationCartFavorite';
import { NavigationMain } from '../NavigationMain';
import './Aside.scss';

export const Aside = () => {
  return (
    <aside className="aside">
      <nav className="aside__nav-bar">
        <NavigationMain isAside={true} />
        <NavigationCartFavorite isAside={true} />
      </nav>
    </aside>
  );
};
