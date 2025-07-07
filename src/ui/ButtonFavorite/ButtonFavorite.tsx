import React from 'react';
import './ButtonFavorite.scss';

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
      className={`buttonFavorite${isActive ? ' buttonFavorite--liked' : ''}`}
      type="button"
      aria-label={isActive ? 'Remove from favorite' : 'Add to favorite'}
      onClick={onClick}
    ></button>
  );
};
