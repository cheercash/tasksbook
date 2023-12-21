import {
  ButtonBaseProps,
  ChevronDownIcon,
  Dropdown,
  DropdownProps,
  Menu,
  MenuProps,
} from "../../atoms";
import { Button, ButtonProps, IconButton } from "../../molecules";
import { useDropdown } from "root/shared/hooks";

export type DropdownMenuProps = {
  menuTitle?: string;
  menuTitlePos?: MenuProps["titlePos"];
  children: JSX.Element[] | JSX.Element;
  alignX?: DropdownProps["alignX"];
  alignY?: DropdownProps["alignY"];

  buttonTitle?: string;
  buttonIcon?: (isOpen: boolean) => JSX.Element;
  buttonIconPos?: ButtonProps["iconPos"];
  buttonSize?: ButtonBaseProps["size"];
  buttonVariant?: ButtonBaseProps["variant"];
  buttonColor?: ButtonBaseProps["color"];
  disabled?: boolean;
};

export const DropdownMenu = ({
  children,
  alignX = "start",
  alignY = "bottom",
  menuTitle,
  menuTitlePos,
  buttonTitle,
  buttonIcon,
  buttonIconPos,
  buttonSize,
  buttonVariant,
  buttonColor,
  disabled,
}: DropdownMenuProps) => {
  const { dropdownRef, isOpen, setIsOpen } = useDropdown();

  const anchor = buttonTitle ? (
    <Button
      icon={buttonIcon?.(isOpen)}
      iconPos={buttonIconPos}
      onClick={() => setIsOpen((v) => !v)}
      size={buttonSize}
      variant={buttonVariant}
      color={buttonColor}
      disabled={disabled}
    >
      {buttonTitle}
    </Button>
  ) : (
    <IconButton
      onClick={() => setIsOpen((v) => !v)}
      size={buttonSize}
      variant={buttonVariant}
      color={buttonColor}
      disabled={disabled}
    >
      {buttonIcon ? (
        buttonIcon(isOpen)
      ) : (
        <ChevronDownIcon className={isOpen ? "rotate-180" : "rotate-0"} />
      )}
    </IconButton>
  );

  return (
    <Dropdown
      ref={dropdownRef}
      isOpen={isOpen}
      alignX={alignX}
      alignY={alignY}
      anchor={anchor}
    >
      <Menu
        className="max-h-80"
        title={menuTitle}
        titlePos={menuTitlePos}
      >
        {children}
      </Menu>
    </Dropdown>
  );
};
