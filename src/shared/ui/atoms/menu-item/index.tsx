import { useContext } from "react";
import tw from "tailwind-styled-components";
import { SelectContext } from "root/shared/context/select";

export type MenuItemProps = {
  disabled?: boolean;
  children: React.ReactNode;
  icon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  value?: string;
};

export const MenuItem = ({
  children,
  disabled = false,
  icon,
  onClick,
  value,
}: MenuItemProps) => {
  const selectContext = useContext(SelectContext);

  const active =
    selectContext && selectContext.state?.value && value
      ? selectContext.state.value === value
      : false;

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;

    onClick?.(e);

    if (active) return;

    if (selectContext && value) {
      selectContext.setState({
        children: children,
        value: value,
        icon: icon,
      });

      selectContext.setIsOpen(false);
    }
  };

  return (
    <MenuItemEl
      active={active}
      disabled={disabled}
      role="menuitem"
      onClick={handleClick}
    >
      <MenuItemInner>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <TextWrapper>{children}</TextWrapper>
      </MenuItemInner>
    </MenuItemEl>
  );
};

type MenuItemElProps = {
  active: boolean;
  disabled: boolean;
};

const activeAndDisabledToStyles: Record<
  "active" | "non-active",
  Record<"disabled" | "non-disabled", string>
> = {
  "non-active": {
    "non-disabled":
      "bg-light-surface text-light-contrast hover:bg-light-stroke active:bg-light-surface-active dark:bg-dark-surface dark:text-dark-contrast dark:hover:bg-dark-stroke dark:active:bg-dark-surface-active",
    disabled: "text-light-stroke dark:text-dark-stroke",
  },
  active: {
    "non-disabled":
      "bg-light-surface-active text-light-contrast dark:bg-dark-surface-active dark:text-dark-contrast",
    disabled: "text-light-stroke dark:text-dark-stroke",
  },
};

const MenuItemEl = tw.div<MenuItemElProps>`
relative
px-el-md-px
overflow-hidden

${(p) => (p.disabled ? "cursor-not-allowed" : "cursor-pointer")}

${(p) =>
  activeAndDisabledToStyles[p.active ? "active" : "non-active"][
    p.disabled ? "disabled" : "non-disabled"
  ]}
`;

const MenuItemInner = tw.div`
flex
items-center
gap-3
h-el-md
pointer-events-none
`;

const IconWrapper = tw.i`
block
h-el-md-icon
[&>*]:w-full
[&>*]:h-full
`;

const TextWrapper = tw.span`
body1
flex-1
block
overflow-hidden
whitespace-nowrap
text-ellipsis
`;
