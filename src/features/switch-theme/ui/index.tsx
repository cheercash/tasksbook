import { useUnit } from "effector-react";
import { session } from "root/entities";
import { Theme } from "root/shared/api/type";
import { DeviceIcon, Fallback, MenuItem, MoonIcon } from "root/shared/ui/atoms";
import tw from "tailwind-styled-components";
import { events, stores } from "../model";
import { useTheme } from "root/shared/hooks";

export type SwitchThemeProps = {};

const themeToOptions: Record<Theme, { icon: JSX.Element; title: string }> = {
  DARK: {
    icon: <MoonIcon />,
    title: "тёмная",
  },
  LIGHT: {
    // TODO: replace with right icon
    icon: <>sun</>,
    title: "светлая",
  },
  SYSTEM: {
    icon: <DeviceIcon />,
    title: "системная",
  },
};

export const SwitchTheme = ({}: SwitchThemeProps) => {
  const [user, onSwitchButtonClicked, isSwitching] = useUnit([
    session.model.stores.$user,
    events.onSwitchButtonClicked,
    stores.$isThemeSwitching,
  ]);

  useTheme(user?.theme ?? "SYSTEM");

  if (!user) {
    return <></>;
  }

  const themeOption = themeToOptions[user.theme];

  return (
    <MenuItem
      onClick={onSwitchButtonClicked}
      icon={
        <Fallback
          fallbackElement={<>Spin</>}
          isLoading={isSwitching}
        >
          {themeOption.icon}
        </Fallback>
      }
    >
      <Fallback
        fallbackElement={"Смена..."}
        isLoading={isSwitching}
      >
        Тема: {themeOption.title}
      </Fallback>
    </MenuItem>
  );
};
