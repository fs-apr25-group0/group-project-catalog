import * as React from 'react';
import { Select } from 'radix-ui';
import './Dropdown.scss';
import { useTranslation } from '../../hooks/useTranslation';

interface DropdownProps {
  title: string;
  value: string | number;
  onChange: (v: string) => void;
  variants: (string | number)[];
}

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  value,
  onChange,
  variants,
}) => {
  const { translate } = useTranslation();
  return (
    <div className="dropdown">
      <label
        className="dropdown__name small-text"
        htmlFor="selectId"
      >
        {title}
      </label>
      <Select.Root
        value={value.toString()}
        onValueChange={onChange}
      >
        <Select.Trigger
          className="SelectTrigger Sort button-text"
          aria-label="Sort"
        >
          <Select.Value placeholder="Newest" />

          <div className="icon-chewron-down"></div>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className="SelectContent"
            position="popper"
            side="bottom"
            collisionPadding={-10}
          >
            <Select.Viewport className="SelectViewport">
              <Select.Group>
                {variants.map((variant) => (
                  <Select.Item
                    key={variant}
                    value={variant.toString()}
                    className="SelectItem"
                  >
                    <Select.ItemText>
                      {typeof variant === 'string' ?
                        translate('common', `${variant}`)
                      : variant}
                    </Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};
