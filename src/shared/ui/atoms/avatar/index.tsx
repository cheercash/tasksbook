import Image from "next/image";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

export type AvatarProps = {
  src?: string;
  placeholder: string;
  size?: AvatarSize;
};

type AvatarSize = "md" | "lg" | "xl";

export const Avatar = ({ placeholder, size = "md", src }: AvatarProps) => {
  const [error, setError] = useState(false);

  const formattedPlaceholder = placeholder
    .split(" ")
    .map((item) => item.charAt(0).toUpperCase())
    .join(". ");

  useEffect(() => setError(false), [src]);

  return (
    <AvatarWrapper size={size}>
      {src && !error && (
        <Image
          src={src}
          alt="some"
          fill
          onError={() => setError(true)}
          onLoadCapture={() => setError(false)}
          className="object-cover"
        />
      )}
      {(!src || error) && <Placeholder>{formattedPlaceholder}.</Placeholder>}
    </AvatarWrapper>
  );
};

//
const sizeToStyles: Record<AvatarSize, string> = {
  xl: "w-el-xl h-el-xl subtitle1",
  lg: "w-el-lg h-el-lg body1",
  md: "w-el-md h-el-md body2",
};

type AvatarWrapperProps = {
  size: AvatarSize;
};

const AvatarWrapper = tw.div<AvatarWrapperProps>`
relative
flex
items-center
justify-center
rounded-full
border-2
overflow-hidden
bg-light-stroke
border-light-surface-active
dark:bg-dark-stroke
dark:border-dark-surface-active

${(p) => sizeToStyles[p.size]}
`;

//
const Placeholder = tw.span`
block
flex-1
text-light-surface-active
dark:text-dark-surface-active
text-center
whitespace-nowrap
overflow-hidden
text-ellipsis
`;
