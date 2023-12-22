import tw from "tailwind-styled-components";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return <HeaderEl>Header</HeaderEl>;
};

const HeaderEl = tw.header`
lg:h-[var(--header-h-lg)]
bg-light-main
dark:bg-dark-main
`;
