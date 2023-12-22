import tw from "tailwind-styled-components";
import { Hint, HintProps } from "../../molecules";
import { InputBase, InputBaseProps } from "../../atoms";

export type InputProps = {
  icon?: JSX.Element;
  label?: string;
  labelIcon?: JSX.Element;
  hintText?: string;
  hintVariant?: NonNullable<HintProps["variant"]>;
} & Omit<InputBaseProps, "hasIcon">;

export const Input = ({
  icon,
  iconPos = "start",
  size = "md",
  label,
  labelIcon,
  hintText,
  hintVariant = "danger",
  ...rest
}: InputProps) => (
  <InputWrap>
    <InputElWrapper>
      <InputBase
        hasIcon={!!icon}
        size={size}
        iconPos={iconPos}
        {...rest}
      />
      {icon && (
        <IconWrap
          iconPos={iconPos}
          size={size}
        >
          {icon}
        </IconWrap>
      )}
    </InputElWrapper>
    {hintText && (
      <Hint
        variant={hintVariant}
        htmlFor={rest.name}
        disabled={rest.disabled}
      >
        {hintText}
      </Hint>
    )}
  </InputWrap>
);

//
const InputWrap = tw.div`
flex
flex-col
gap-1
w-full
`;

//
const InputElWrapper = tw.div`
relative
`;

//
const sizeToIconWrapStyles: Record<InputBaseProps["size"], string> = {
  lg: "h-el-lg-icon w-el-lg-icon",
  md: "h-el-md-icon w-el-md-icon",
  sm: "h-el-sm-icon w-el-sm-icon",
};

//
const posAndSizeToIconWrapStyles: Record<
  NonNullable<InputBaseProps["iconPos"]>,
  Record<InputBaseProps["size"], string>
> = {
  end: { lg: "right-el-lg-px", md: "right-el-md-px", sm: "right-el-sm-px" },
  start: { lg: "left-el-lg-px", md: "left-el-md-px", sm: "left-el-sm-px" },
};

type IconWrapProps = {
  iconPos: NonNullable<InputBaseProps["iconPos"]>;
  size: InputBaseProps["size"];
};

const IconWrap = tw.i<IconWrapProps>`
-z-[1]
absolute
block
top-1/2
-translate-y-1/2
duration-sm
[&>*]:w-full
[&>*]:h-full

text-light-surface-active
dark:text-dark-surface-active

${(p) => sizeToIconWrapStyles[p.size]}
${(p) => posAndSizeToIconWrapStyles[p.iconPos][p.size]}
`;
