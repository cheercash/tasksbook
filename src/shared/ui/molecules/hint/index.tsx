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
  return (
    <HintEl
      aria-disabled={disabled}
      htmlFor={htmlFor}
      disabled={disabled}
      variant={variant}
    >
      {icon && (
        <IconWrapper variant={variant}>
          {variant === "label" ? icon : variantToIcon[variant]}
        </IconWrapper>
      )}
      <HintText variant={variant}>{children}</HintText>
    </HintEl>
  );
};

type HintElProps = {
  variant: ComponentVariant;
  disabled: boolean;
};

const HintEl = tw.label<HintElProps>`
flex
items-center
w-full
overflow-hidden

${(p) => (p.variant === "label" ? "gap-2" : "gap-1")}
`;

const variantToHintTextStyles: Record<ComponentVariant, string> = {
  danger: "overline1 text-accents-danger",
  label:
    "subtitle2 text-light-contrast dark:text-dark-contrast overflow-hidden text-ellipsis whitespace-nowrap",
  success: "overline1 text-accents-success",
};

type HintTextProps = {
  variant: ComponentVariant;
};

const HintText = tw.span<HintTextProps>`
flex-1

${(p) => variantToHintTextStyles[p.variant]}
`;

const variantToIconWrapperStyles: Record<ComponentVariant, string> = {
  danger: "text-accents-danger",
  label: "text-light-contrast dark:text-dark-contrast",
  success: "text-accents-success",
};

type IconWrapperProps = {
  variant: ComponentVariant;
};

const IconWrapper = tw.i<IconWrapperProps>`
block
w-4
h-4
[&>*]:w-full
[&>*]:h-full

${(p) => variantToIconWrapperStyles[p.variant]}
`;
