import React from 'react';
import './ButtonAdd.scss';
import cn from 'classnames';
import { useThemeState } from '../../stateManagers/themeState';

interface ButtonAddProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({
  isActive = false,
  onClick,
}) => {
  const { theme } = useThemeState();
  return (
    <button
      className={cn('buttonAdd', 'button-text', `buttonAdd__${theme}`, {
        'buttonAdd--active': isActive,
      })}
      type="button"
      aria-label={isActive ? 'Remove from cart' : 'Add to cart'}
      onClick={onClick}
    >
      {isActive ? 'Added' : 'Add to cart'}
    </button>
  );
};
