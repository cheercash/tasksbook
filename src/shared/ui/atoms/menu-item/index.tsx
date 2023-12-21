import { useContext, useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { WarningIcon } from "..";
import { SelectContext } from "root/shared/context/select";

export type MenuItemProps = {
  active?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  icon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  value?: string;
};

export const MenuItem = ({
  children,
  active = false,
  disabled = false,
  icon,
  onClick,
  value,
}: MenuItemProps) => {
  const [bubbles, setBubbles] = useState<
    { x: number; y: number; key: string }[]
  >([]);

  const selectContext = useContext(SelectContext);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;

    onClick?.(e);

    if (selectContext) {
      if (value) {
        selectContext.setState({
          children: children,
          value: value,
          icon: icon,
        });
      }
    }

    if (active) return;

    setBubbles((prev) => [
      {
        key: Date.now().toString(),
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
      },
      ...prev,
    ]);

    const timeout = setTimeout(() => {
      setBubbles((prev) =>
        prev.filter((_, idx, arr) => idx !== arr.length - 1),
      );

      clearTimeout(timeout);
    }, 360);
  };

  useEffect(() => {
    if (active) {
      if (selectContext) {
        selectContext.setState({
          children: children,
          value: value,
          icon: icon,
        });
      }
    }
  }, [active, selectContext]);

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
      {bubbles.map((item) => (
        <BubbleWrapper
          style={{ left: item.x + "px", top: item.y + "px" }}
          key={item.key}
        >
          <Bubble />
        </BubbleWrapper>
      ))}
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
      "bg-light-surface text-light-contrast dark:bg-dark-surface dark:text-dark-contrast",
    disabled: "text-light-stroke dark:text-dark-stroke",
  },
  active: {
    "non-disabled":
      "bg-light-stroke text-light-contrast dark:bg-dark-stroke dark:text-dark-contrast",
    disabled: "text-light-stroke dark:text-dark-stroke",
  },
};

const MenuItemEl = tw.div<MenuItemElProps>`
relative
px-6
overflow-hidden

${(p) => p.disabled && "cursor-not-allowed"}

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

const BubbleWrapper = tw.i`
block
absolute
pointer-events-none
animate-bubble
`;

const Bubble = tw.i`
block
pt-[100%]
rounded-full
bg-light-surface-active
dark:bg-dark-surface-active
-translate-x-1/2
-translate-y-1/2
`;
