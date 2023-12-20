import { useState } from "react";
import tw from "tailwind-styled-components";
import { WarningIcon } from "..";

export type MenuItemProps = {
  active?: boolean;
  disabled?: boolean;
  children: string;
  icon?: JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const MenuItem = ({
  children,
  active = false,
  disabled = false,
  icon,
  onClick,
}: MenuItemProps) => {
  const [bubbles, setBubbles] = useState<
    { x: number; y: number; key: string }[]
  >([]);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (disabled) return;

    onClick?.(e);

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
px-5
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
gap-2
h-el-md
pointer-events-none
`;

const IconWrapper = tw.i`
block
w-4
h-4
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
