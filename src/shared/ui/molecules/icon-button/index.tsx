import tw from "tailwind-styled-components";
import { ButtonBase, ButtonBaseProps } from "../../atoms";

export type IconButtonProps = { children: JSX.Element } & Partial<
  Omit<ButtonBaseProps, "shape" | "fullWidth">
>;

type ButtonSize = ButtonBaseProps["size"];

export const IconButton = ({
  children,
  color = "inherit",
  size = "md",
  variant = "contained",
  disabled = false,
  onClick,
  type,
}: IconButtonProps) => (
  <ButtonBase
    color={color}
    fullWidth={false}
    shape="square"
    size={size}
    variant={variant}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    <ButtonInnerEl>
      <Icon size={size}>{children}</Icon>
    </ButtonInnerEl>
  </ButtonBase>
);

const ButtonInnerEl = tw.span`
flex
items-center
justify-center
w-full

pointer-events-none
`;

const sizeToIconStyles: Record<ButtonSize, string> = {
  lg: "w-el-lg-icon h-el-lg-icon",
  md: "w-el-md-icon h-el-md-icon",
  sm: "w-el-sm-icon h-el-sm-icon",
};

type IconProps = {
  size: ButtonSize;
};

const Icon = tw.i<IconProps>`
block
[&>*]:w-full
[&>*]:h-full
[&>*]:duration-sm

${(p) => sizeToIconStyles[p.size]}
`;
