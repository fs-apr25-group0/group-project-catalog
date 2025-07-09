import './Dropdown.scss';

interface DropdownProps {
  title: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  variants: (string | number)[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  value,
  onChange,
  variants,
}) => {
  return (
    <div className="dropdown">
      <label
        className="dropdown__name small-text"
        htmlFor="selectId"
      >
        {title}
      </label>
      <select
        id="selectId"
        className="dropdown__select button-text"
        value={value}
        onChange={onChange}
      >
        <ul className="dropdown__viewport">
          {variants.map((variant) => (
            <li
              key={variant}
              value={variant}
              className="dropdown__item body-text"
            >
              {variant}
            </li>
          ))}
        </ul>
      </select>
    </div>
  );
};
