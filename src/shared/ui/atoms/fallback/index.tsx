import tw from "tailwind-styled-components";

export type FallbackProps = {
  isLoading: boolean;
  fallbackElement: React.ReactNode;
  children: React.ReactNode;
};

export const Fallback = ({
  fallbackElement,
  isLoading,
  children,
}: FallbackProps) => {
  if (isLoading) {
    return fallbackElement;
  }

  return children;
};
