import BurgerIcon from '../../images/icons/menu.svg';
// import './BurgerButton.scss';

export const BurgerButton = () => (
  <label
    htmlFor="menu-toggle"
    className="burger"
    aria-label="Open menu"
    tabIndex={0}
  >
    <img
      src={BurgerIcon}
      alt="Open menu"
    />
  </label>
);
