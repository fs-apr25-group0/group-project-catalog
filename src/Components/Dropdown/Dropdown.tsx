import * as React from 'react';
import { Select } from 'radix-ui';
import classnames from 'classnames';
import './Dropdown.scss';
import { useTranslation } from '../../hooks/useTranslation';

export const Dropdown = () => {
  const { translate } = useTranslation();

  return (
    <Select.Root>
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
              <SelectItem value="newest">
                {translate('common', 'Newest')}
              </SelectItem>
              <SelectItem value="alphabetically">
                {translate('common', 'Alphabetically')}
              </SelectItem>
              <SelectItem value="cheapest ">
                {translate('common', 'Cheapest')}
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
type SelectItemProps = React.ComponentProps<typeof Select.Item> & {
  children: React.ReactNode;
  className?: string;
};

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames('SelectItem', 'body-text', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  },
);

SelectItem.displayName = 'SelectItem';
