import { Theme } from "root/shared/api/type";

export type SwitchThemeReq = {
  // TODO: remove
  theme: Theme;
};

const themeToNextTheme: Record<Theme, Theme> = {
  DARK: "LIGHT",
  LIGHT: "SYSTEM",
  SYSTEM: "DARK",
};

export const switchThemeReq = async ({ theme }: SwitchThemeReq) =>
  new Promise<Theme>((res) => {
    setTimeout(() => {
      res(themeToNextTheme[theme]);
    }, 1500);
  });
