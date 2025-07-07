import React from 'react';
import './ButtonFavorite.scss';
import cn from 'classnames';

interface ButtonFavoriteProps {
  isActive?: boolean;
  onClick?: () => void;
}

export const ButtonFavorite: React.FC<ButtonFavoriteProps> = ({
  isActive = false,
  onClick,
}) => {
  return (
    <button
      className={cn('buttonFavorite', { 'buttonFavorite--liked': isActive })}
      type="button"
      aria-label={isActive ? 'Remove from favorite' : 'Add to favorite'}
      onClick={onClick}
    ></button>
  );
};
