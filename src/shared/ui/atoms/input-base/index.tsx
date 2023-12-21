import tw from "tailwind-styled-components";

export type InputBaseProps = {
  size: InputSize;
  fullWidth?: boolean;
  hasIcon: boolean;
  iconPos?: IconPos;

  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  onChange?: React.InputHTMLAttributes<HTMLInputElement>["onChange"];
  onFocus?: React.InputHTMLAttributes<HTMLInputElement>["onFocus"];
  autoFocus?: React.InputHTMLAttributes<HTMLInputElement>["autoFocus"];
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  name?: React.InputHTMLAttributes<HTMLInputElement>["name"];
  placeholder?: React.InputHTMLAttributes<HTMLInputElement>["placeholder"];
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  disabled?: boolean;
};

type InputSize = "sm" | "md" | "lg";

type IconPos = "start" | "end";

export const InputBase = ({
  size,
  fullWidth = false,
  hasIcon,
  iconPos = "start",
  ...rest
}: InputBaseProps) => (
  <InputBaseEl
    elSize={size}
    fullWidth={fullWidth}
    hasIcon={hasIcon}
    iconPos={iconPos}
    {...rest}
  />
);

//
const sizeToStyles: Record<InputSize, string> = {
  lg: "h-el-lg px-el-lg-px rounded-lg",
  md: "h-el-md px-el-md-px rounded-md",
  sm: "h-el-sm px-el-sm-px rounded-sm",
};

const iconPosAndSizeToStyles: Record<IconPos, Record<InputSize, string>> = {
  end: {
    lg: "pr-input-lg-icon-px pl-el-lg-px",
    md: "pr-input-md-icon-px pl-el-md-px",
    sm: "pr-input-sm-icon-px pl-el-sm-px",
  },
  start: {
    lg: "pl-input-lg-icon-px pr-el-lg-px",
    md: "pl-input-md-icon-px pr-el-md-px",
    sm: "pl-input-sm-icon-px pr-el-sm-px",
  },
};

type InputBaseElProps = {
  elSize: InputSize;
  fullWidth: boolean;
  hasIcon: boolean;
  iconPos: IconPos;
};

const InputBaseEl = tw.input<InputBaseElProps>`
body1
bg-[transparent]
duration-sm
border
disabled:cursor-not-allowed

text-light-contrast
disabled:text-light-surface-active
placeholder-light-surface-active
border-light-stroke
[&:not(:disabled)]hover:border-light-contrast
[&:not(:disabled)]focus:border-light-contrast

dark:text-dark-contrast
disabled:dark:text-dark-surface-active
dark:placeholder-dark-surface-active
dark:border-dark-stroke
[&:not(:disabled)]dark:hover:border-dark-contrast
[&:not(:disabled)]dark:focus:border-dark-contrast

outline-none

${(p) => p.fullWidth && "w-full"}

${(p) => sizeToStyles[p.elSize]}

${(p) => p.hasIcon && iconPosAndSizeToStyles[p.iconPos][p.elSize]}
`;
