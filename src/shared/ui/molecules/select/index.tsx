import tw from "tailwind-styled-components";
import { ChevronDownIcon, Dropdown, Menu, MenuItemProps } from "../../atoms";
import { useState } from "react";
import { SelectContext } from "root/shared/context/select";

export type SelectProps = {
  icon?: JSX.Element;
  title: string;
  fullWidth?: boolean;
  disabled?: boolean;
  children: JSX.Element | JSX.Element[];
};

export type SelectState = {
  icon?: MenuItemProps["icon"];
  value: MenuItemProps["value"];
  children: MenuItemProps["children"];
};

export const Select = ({
  children,
  disabled,
  fullWidth = false,
  icon,
  title,
}: SelectProps) => {
  const [state, setState] = useState<SelectState | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <SelectContext.Provider value={{ state: state, setState }}>
      <Dropdown
        fullWidth={fullWidth}
        alignX="center"
        alignY="bottom"
        isOpen={isOpen}
        anchor={
          <SelectEl
            fullWidth={fullWidth}
            isOpen={isOpen}
            disabled={disabled}
            onClick={() => setIsOpen((v) => !v)}
          >
            <SelectInner>
              <IconWrapper>{state?.icon ? state.icon : icon}</IconWrapper>
              <SelectTitle>
                {state?.children ? state.children : title}
              </SelectTitle>
            </SelectInner>
            <ArrowWrapper isOpen={isOpen}>
              <ChevronDownIcon />
            </ArrowWrapper>
          </SelectEl>
        }
      >
        <Menu>{children}</Menu>
      </Dropdown>
    </SelectContext.Provider>
  );
};

//
type SelectElProps = {
  isOpen: boolean;
  fullWidth: boolean;
};

const SelectEl = tw.button<SelectElProps>`
px-6
flex
items-center
gap-8
h-el-md
border
hover:border-light-contrast
hover:dark:border-dark-contrast
duration-sm
rounded-md

[&:not(:disabled)>span>span]:text-light-contrast
[&:not(:disabled)>span>span]:dark:text-dark-contrast

[&:not(:disabled)>span>i]:text-light-contrast
[&:not(:disabled)>span>i]:dark:text-dark-contrast

[&:disabled>span>span]:text-light-surface-active
[&:disabled>span>span]:dark:text-dark-surface-active

[&:disabled>span>i]:text-light-surface-active
[&:disabled>span>i]:dark:text-dark-surface-active

[&:not(:disabled):hover>i]:text-light-contrast
[&:not(:disabled):hover>i]:dark:text-dark-contrast

${(p) => p.fullWidth && "w-full"}

${(p) =>
  p.isOpen
    ? "border-light-contrast dark:border-dark-contrast"
    : "border-light-stroke dark:border-dark-stroke"}
`;

//
const SelectInner = tw.span`
flex
items-center
flex-1
gap-3
overflow-hidden
`;

//
const SelectTitle = tw.span`
body1
block
flex-1
text-start
overflow-hidden
whitespace-nowrap
text-ellipsis
`;

//
const IconEl = tw.i`
strink-0
block
duration-sm
[&>*]:w-full
[&>*]:h-full
`;

//
const IconWrapper = tw(IconEl)`
h-el-md-icon
`;

//
type ArrowWrapperProps = {
  isOpen: boolean;
};

const ArrowWrapper = tw(IconEl)<ArrowWrapperProps>`
h-3
w-3

${(p) =>
  p.isOpen
    ? "text-light-contrast dark:text-dark-contrast rotate-180"
    : "text-light-surface-active dark:text-dark-surface-active rotate-0"}
`;
