import './ButtonArrow.scss';
import cn from 'classnames';

type Direction = 'left' | 'right' | 'up' | 'down';

interface ButtonArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: Direction;
}

export const ButtonArrow: React.FC<ButtonArrowProps> = ({
  direction,
  disabled = false,
  className,
  ...props
}) => {
  const btnClass = cn(
    'button-arrow',
    `button-arrow--${direction}`,
    { 'is-disabled': disabled },
    className,
  );

  return (
    <button
      className={btnClass}
      disabled={disabled}
      {...props}
    >
      <span className="button-arrow__icon" />
    </button>
  );
};
