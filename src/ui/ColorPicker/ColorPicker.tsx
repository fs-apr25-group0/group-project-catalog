import React, { useState } from 'react';
import './ColorPicker.scss';

const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFA500'];

export const ColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div className="color-picker">
      {colors.map((color) => (
        <button
          key={color}
          className={`color-picker__item ${
            selectedColor === color ? 'color-picker__item--selected' : ''
          }`}
          onClick={() => setSelectedColor(color)}
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
