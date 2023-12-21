import React, { forwardRef, useRef, useState } from "react";
import tw from "tailwind-styled-components";

export type DropdownProps = {
  anchor: JSX.Element;
  children: JSX.Element;
  isOpen: boolean;
  alignX: AlignX;
  alignY: AlignY;
  fullWidth?: boolean;
};

type AlignX = "start" | "center" | "end";

type AlignY = "bottom" | "top";

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ anchor, children, isOpen, alignX, alignY, fullWidth = false }, ref) => (
    <DropdownEl
      fullWidth={fullWidth}
      ref={ref}
    >
      <AnchorWrapper fullWidth={fullWidth}>{anchor}</AnchorWrapper>
      <BodyWrap
        alignX={alignX}
        alignY={alignY}
      >
        <BodyWrapper
          alignX={alignX}
          alignY={alignY}
        >
          <Body
            isOpen={isOpen}
            alignX={alignX}
            alignY={alignY}
          >
            {children}
          </Body>
        </BodyWrapper>
      </BodyWrap>
    </DropdownEl>
  ),
);

//
type DropdownElProps = {
  fullWidth: boolean;
};

const DropdownEl = tw.div<DropdownElProps>`
relative
${(p) => (p.fullWidth ? "w-full" : "w-fit")}
`;

//

type AnchorWrapperProps = {
  fullWidth: boolean;
};

const AnchorWrapper = tw.div<AnchorWrapperProps>`
${(p) => (p.fullWidth ? "w-full" : "w-fit")}
`;

//

const alignmentToBodyWrapStyles: Record<AlignY, Record<AlignX, string>> = {
  bottom: {
    center: "left-1/2 top-full -translate-x-1/2",
    end: "right-0 top-full",
    start: "left-0 top-full",
  },
  top: {
    center: "left-1/2 bottom-full -translate-x-1/2",
    end: "right-0 bottom-full",
    start: "left-0 bottom-full",
  },
};

type BodyWrapProps = { alignX: AlignX; alignY: AlignY };

const BodyWrap = tw.div<BodyWrapProps>`
absolute
min-w-fit
w-full
${(p) => alignmentToBodyWrapStyles[p.alignY][p.alignX]}
`;

//

const alignmentToBodyWrapperStyles: Record<AlignY, string> = {
  bottom: "px-8 pt-4 pb-8 -mx-8 -mb-8",
  top: "px-8 pb-4 pt-8 -mx-8 -mt-8",
};

type BodyWrapperProps = {
  alignX: AlignX;
  alignY: AlignY;
};

const BodyWrapper = tw.div<BodyWrapperProps>`
${(p) => alignmentToBodyWrapperStyles[p.alignY]}
`;

//

const alignmentToBodyStyles: Record<AlignY, Record<AlignX, string>> = {
  bottom: {
    center: "origin-top",
    end: "origin-top-right",
    start: "origin-top-left",
  },
  top: {
    center: "origin-top",
    end: "origin-bottom-right",
    start: "origin-bottom-left",
  },
};

type BodyProps = {
  isOpen: boolean;
  alignX: AlignX;
  alignY: AlignY;
};

const Body = tw.div<BodyProps>`
duration-sm

${(p) => alignmentToBodyStyles[p.alignY][p.alignX]}

${(p) =>
  p.isOpen
    ? "animate-dropdown-open scale-1 opacity-1 translate-y-0"
    : "animate-dropdown-close scale-75 opacity-0 -translate-y-2"}
`;
