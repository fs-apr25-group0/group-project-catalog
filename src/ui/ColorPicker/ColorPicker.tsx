import React from 'react';
import './ColorPicker.scss';

type ColorPickerProps = {
  colors: string[];
  selectedColor: string;
  onSelect: (color: string) => void;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColor,
  onSelect,
}) => {
  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          className={`color-picker__item ${
            selectedColor === color ? 'color-picker__item--selected' : ''
          }`}
          onClick={() => onSelect(color)}
          aria-label={`Pick ${color}`}
        >
          <span
            className="color-picker__color"
            style={{ backgroundColor: color }}
          />
        </button>
      ))}
    </div>
  );
};
