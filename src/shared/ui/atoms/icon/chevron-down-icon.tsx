import tw from "tailwind-styled-components";
import { IconProps } from "./icon.type";

export const ChevronDownIcon = (props: IconProps) => (
  <svg
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill-rule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);
