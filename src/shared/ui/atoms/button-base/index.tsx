import { useBubble } from "root/shared/hooks";
import tw from "tailwind-styled-components";

export type ButtonBaseProps = {
  color: ButtonColor;
  variant: ButtonVariant;
  size: ButtonSize;
  shape: ButtonShape;
  fullWidth: boolean;

  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children: JSX.Element;
};

type ButtonColor = "primary" | "success" | "danger" | "inherit";

type ButtonVariant = "contained" | "outlined" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonShape = "rectangle" | "square";

export const ButtonBase = ({
  children,
  color,
  size,
  variant,
  disabled,
  onClick,
  type,
  shape,
  fullWidth,
}: ButtonBaseProps) => {
  const { addBubble, bubbles } = useBubble();

  const handleClick: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"] =
    (e) => {
      onClick?.(e);

      addBubble(e);
    };

  return (
    <ButtonBaseEl
      color={color}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={handleClick}
      type={type}
      shape={shape}
      fullWidth={fullWidth}
    >
      {children}

      {bubbles.map((item) => (
        <BubbleWrapper
          style={{ left: item.x + "px", top: item.y + "px" }}
          key={item.key}
        >
          <Bubble
            color={color}
            variant={variant}
          />
        </BubbleWrapper>
      ))}
    </ButtonBaseEl>
  );
};

const variantAndColorToStyles: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  contained: {
    danger: "bg-accents-danger text-on-accent",
    primary: "bg-accents-primary text-on-accent",
    success: "bg-accents-success text-on-accent",
    inherit:
      "bg-light-surface text-light-contrast shadow-md dark:bg-dark-surface dark:text-dark-contrast",
  },
  outlined: {
    danger: "border-accents-danger text-accents-danger",
    primary: "border-accents-primary text-accents-primary",
    success: "border-accents-success text-accents-success",
    inherit:
      "border-light-stroke text-light-contrast dark:border-dark-stroke dark:text-dark-contrast",
  },
  ghost: {
    danger: "text-accents-danger",
    primary: "text-accents-primary",
    success: "text-accents-success",
    inherit: "text-light-contrast dark:text-dark-contrast",
  },
};

const shapeAndSizeToStyles: Record<ButtonShape, Record<ButtonSize, string>> = {
  rectangle: {
    lg: "h-el-lg",
    md: "h-el-md",
    sm: "h-el-sm",
  },
  square: {
    lg: "h-el-lg w-el-lg shrink-0",
    md: "h-el-md w-el-md shrink-0",
    sm: "h-el-sm w-el-sm shrink-0",
  },
};

const sizeToStyles: Record<ButtonSize, string> = {
  lg: "rounded-lg",
  md: "rounded-md",
  sm: "rounded-sm",
};

type ButtonBaseElProps = {
  color: ButtonColor;
  variant: ButtonVariant;
  size: ButtonSize;
  shape: ButtonShape;
  fullWidth: boolean;
};

const ButtonBaseEl = tw.button<ButtonBaseElProps>`
relative
overflow-hidden
disabled:cursor-not-allowed

${(p) =>
  p.variant === "contained" &&
  "disabled:bg-light-stroke disabled:text-light-surface-active dark:disabled:bg-dark-stroke dark:disabled:text-dark-surface-active"}

${(p) =>
  p.variant === "outlined" &&
  "disabled:border-light-stroke disabled:text-light-surface-active dark:disabled:border-dark-stroke dark:disabled:text-dark-surface-active"}

${(p) =>
  p.variant === "ghost" &&
  "disabled:text-light-surface-active dark:disabled:text-dark-surface-active"}

${(p) => p.shape !== "square" && p.fullWidth && "w-full"}

${(p) => p.variant === "outlined" && "border"}
${(p) => !p.disabled && variantAndColorToStyles[p.variant][p.color]}
${(p) => shapeAndSizeToStyles[p.shape][p.size]}
${(p) => sizeToStyles[p.size]}
`;

const BubbleWrapper = tw.i`
block
absolute
pointer-events-none
animate-bubble
`;

type BubbleProps = {
  color: ButtonColor;
  variant: ButtonVariant;
};

const variantAndColorToBubbleStyles: Record<
  ButtonVariant,
  Record<ButtonColor, string>
> = {
  contained: {
    danger: "bg-light-main",
    inherit: "bg-light-surface-active dark:bg-dark-surface-active",
    primary: "bg-light-main",
    success: "bg-light-main",
  },
  outlined: {
    danger: "bg-accents-danger",
    inherit: "bg-light-surface-active dark:bg-dark-surface-active",
    primary: "bg-accents-primary",
    success: "bg-accents-success",
  },
  ghost: {
    danger: "bg-accents-danger",
    inherit: "bg-light-surface-active dark:bg-dark-surface-active",
    primary: "bg-accents-primary",
    success: "bg-accents-success",
  },
};

const Bubble = tw.i<BubbleProps>`
block
pt-[100%]
rounded-full
-translate-x-1/2
-translate-y-1/2

${(p) => p.color !== "inherit" && "opacity-10"}

${(p) => variantAndColorToBubbleStyles[p.variant][p.color]}
`;
