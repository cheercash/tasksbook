import tw from "tailwind-styled-components";
import { ButtonBase, ButtonBaseProps } from "../../atoms";

export type ButtonProps = {
  children: string;
  icon?: JSX.Element;
  iconPos?: IconPos;
} & Partial<Omit<ButtonBaseProps, "shape" | "children">>;

type IconPos = "start" | "end";

type ButtonSize = ButtonBaseProps["size"];

export const Button = ({
  children,
  color = "inherit",
  fullWidth = false,
  size = "md",
  variant = "contained",
  disabled,
  onClick,
  type,
  icon,
  iconPos = "start",
}: ButtonProps) => (
  <ButtonBase
    color={color}
    fullWidth={fullWidth}
    shape="rectangle"
    size={size}
    variant={variant}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    <ButtonInnerEl size={size}>
      <ButtonText>{children}</ButtonText>
      {icon && (
        <Icon
          size={size}
          position={iconPos}
        >
          {icon}
        </Icon>
      )}
    </ButtonInnerEl>
  </ButtonBase>
);

const sizeToStyles: Record<ButtonSize, string> = {
  lg: "px-8 gap-4",
  md: "px-6 gap-3",
  sm: "px-4 gap-2",
};

type ButtonInnerElProps = {
  size: ButtonSize;
};

const ButtonInnerEl = tw.span<ButtonInnerElProps>`
flex
items-center
justify-center
w-full
pointer-events-none

${(p) => sizeToStyles[p.size]}
`;

const ButtonText = tw.span`
order-2
button1
`;

const sizeToIconStyles: Record<ButtonSize, string> = {
  lg: "h-el-lg-icon",
  md: "h-el-md-icon",
  sm: "h-el-sm-icon",
};

type IconProps = {
  size: ButtonSize;
  position: IconPos;
};

const Icon = tw.i<IconProps>`
block
[&>*]:w-full
[&>*]:h-full
[&>*]:duration-sm

${(p) => sizeToIconStyles[p.size]}
${(p) => (p.position === "start" ? "order-1" : "order-3")}
`;
