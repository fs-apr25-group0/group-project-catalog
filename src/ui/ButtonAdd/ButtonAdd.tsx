import React from 'react';
import './ButtonAdd.scss';
import cn from 'classnames';

interface ButtonAddProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const ButtonAdd: React.FC<ButtonAddProps> = ({
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={cn('buttonAdd', 'button-text', {
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
