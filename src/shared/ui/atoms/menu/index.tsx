import tw from "tailwind-styled-components";

export type MenuProps = {
  title?: string;
  titlePos?: TitlePos;
  children: React.ReactNode;
};

type TitlePos = "start" | "center" | "end";

export const Menu = ({ title, titlePos = "start", children }: MenuProps) => {
  return (
    <MenuEl>
      {title && (
        <MenuHeadlineWrap>
          <Title titlePos={titlePos}>{title}</Title>
        </MenuHeadlineWrap>
      )}
      <MenuBodyWrap>{children}</MenuBodyWrap>
    </MenuEl>
  );
};

const MenuEl = tw.div`
flex
flex-col
h-full
bg-light-surface
dark:bg-dark-surface
shadow-md
rounded-lg
overflow-hidden
`;

const MenuHeadlineWrap = tw.div`
px-5
py-4
flex
items-center
border-b
border-light-stroke
dark:border-dark-stroke
`;

const titlePosToStyles: Record<TitlePos, string> = {
  start: "text-start",
  center: "text-center",
  end: "text-end",
};

type TitleProps = {
  titlePos: TitlePos;
};

const Title = tw.span<TitleProps>`
subtitle1
block
w-full
text-light-opacitied
dark:text-dark-opacitied
overflow-hidden
whitespace-nowrap
text-ellipsis

${(p) => titlePosToStyles[p.titlePos]}
`;

const MenuBodyWrap = tw.div`
mb-4
flex-1
overflow-y-auto
`;
