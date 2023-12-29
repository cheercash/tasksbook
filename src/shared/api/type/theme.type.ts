export const Themes = {
  DARK: "DARK",
  LIGHT: "LIGHT",
  SYSTEM: "SYSTEM",
} as const;

export type Theme = keyof typeof Themes;
