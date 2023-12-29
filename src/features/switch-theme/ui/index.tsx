import { useUnit } from "effector-react";
import { session } from "root/entities";
import { Theme } from "root/shared/api/type";
import { MenuItem, MoonIcon } from "root/shared/ui/atoms";
import tw from "tailwind-styled-components";

export type SwitchThemeProps = {};

const themeToName: Record<Theme, string> = {
  DARK: "тёмная",
  LIGHT: "светлая",
  SYSTEM: "системная",
};

export const SwitchTheme = ({}: SwitchThemeProps) => {
  const user = useUnit(session.model.stores.$user);

  return (
    <MenuItem icon={<MoonIcon />}>
      Тема: {themeToName[user?.theme ?? "SYSTEM"]}
    </MenuItem>
  );
};
