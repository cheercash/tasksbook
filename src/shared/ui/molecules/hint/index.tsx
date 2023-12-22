import tw from "tailwind-styled-components";
import { SuccessIcon, WarningIcon } from "../../atoms";

export type HintProps = {
  variant?: ComponentVariant;
  children: string;
  disabled?: boolean;
  htmlFor: string;
  icon?: JSX.Element;
};

type ComponentVariant = HintVariant | "label";

type HintVariant = "danger" | "success";

const variantToIcon: Record<HintVariant, JSX.Element> = {
  danger: <WarningIcon />,
  success: <SuccessIcon />,
};

export const Hint = ({
  children,
  disabled = false,
  variant = "label",
  htmlFor,
  icon,
}: HintProps) => {
  const renderIcon = variant === "label" ? icon : variantToIcon[variant];

  return (
    <HintEl
      aria-disabled={disabled}
      htmlFor={htmlFor}
      variant={variant}
    >
      {renderIcon && (
        <IconWrapper
          variant={variant}
          disabled={disabled}
        >
          {renderIcon}
        </IconWrapper>
      )}
      <HintText
        disabled={disabled}
        variant={variant}
      >
        {children}
      </HintText>
    </HintEl>
  );
};

//
type HintElProps = {
  variant: ComponentVariant;
};

const HintEl = tw.label<HintElProps>`
flex
items-center
w-full
overflow-hidden

${(p) => (p.variant === "label" ? "gap-2" : "gap-1")}
`;

//
const variantToHintTextStyles: Record<ComponentVariant, string> = {
  danger: "overline1 text-accents-danger",
  label:
    "subtitle2 text-light-contrast dark:text-dark-contrast overflow-hidden text-ellipsis whitespace-nowrap",
  success: "overline1 text-accents-success",
};

type HintTextProps = {
  variant: ComponentVariant;
  disabled: boolean;
};

const HintText = tw.span<HintTextProps>`
flex-1

${(p) => variantToHintTextStyles[p.variant]}
${(p) =>
  p.disabled && "text-light-surface-active dark:text-dark-surface-active"}
`;

//
const variantToIconWrapperStyles: Record<ComponentVariant, string> = {
  danger: "w-3 h-3 text-accents-danger",
  label: "w-4 h-4 text-light-contrast dark:text-dark-contrast",
  success: "w-3 h-3 text-accents-success",
};

type IconWrapperProps = {
  variant: ComponentVariant;
  disabled: boolean;
};

const IconWrapper = tw.i<IconWrapperProps>`
block
shrink-0
[&>*]:w-full
[&>*]:h-full

${(p) => variantToIconWrapperStyles[p.variant]}
${(p) =>
  p.disabled && "text-light-surface-active dark:text-dark-surface-active"}
`;
