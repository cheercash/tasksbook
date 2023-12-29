import {
  MenuItem,
  PersonIcon,
  MoonIcon,
  SettingsIcon,
  StarIcon,
  SignOutIcon,
  Avatar,
  Skeleton,
} from "root/shared/ui/atoms";
import { DropdownMenu } from "root/shared/ui/organisms";
import tw from "tailwind-styled-components";
import { useUnit } from "effector-react";
import { model } from "../..";
import Link from "next/link";
import { IconButton } from "root/shared/ui/molecules";
import { Theme } from "root/shared/api/type";

export type HeaderUserBlockProps = {};

const themeToName: Record<Theme, string> = {
  DARK: "тёмная",
  LIGHT: "светлая",
  SYSTEM: "системная",
};

export const HeaderUserBlock = ({}: HeaderUserBlockProps) => {
  const [user, isUserFetchedOnLoad, isAuthorizing] = useUnit([
    model.stores.$user,
    model.stores.$isUserFetchedOnLoad,
    model.stores.$isAuthorizing,
  ]);

  if (!user && isUserFetchedOnLoad) {
    return (
      <Link href={{ query: { modal: "sign-in" } }}>
        <IconButton
          color="primary"
          size="md"
          variant="ghost"
        >
          <PersonIcon />
        </IconButton>
      </Link>
    );
  }

  return (
    <HeaderEndWrapper>
      {user && !isAuthorizing ? (
        <Title>Хорошего дня, {user.login} 🥸</Title>
      ) : (
        <Skeleton />
      )}

      <UserWrapper>
        {user && !isAuthorizing ? (
          <>
            <Avatar
              placeholder={[user.firstName, user.lastName].join(" ")}
              src={user.avatarUrl}
              size="md"
            />

            <DropdownMenu
              alignX="end"
              alignY="bottom"
              buttonColor="inherit"
              buttonSize="sm"
              menuWrapperClassName="min-w-48"
            >
              <Link href={"/profile"}>
                <MenuItem icon={<PersonIcon />}>Профиль</MenuItem>
              </Link>

              <MenuItem icon={<MoonIcon />}>
                Тема: {themeToName[user.theme]}
              </MenuItem>

              <Link href={"/settings"}>
                <MenuItem icon={<SettingsIcon />}>Настройки</MenuItem>
              </Link>

              <Link href={{ query: { modal: "premium" } }}>
                <MenuItem icon={<StarIcon className="text-accents-primary" />}>
                  <span className="text-accents-primary">Премиум</span>
                </MenuItem>
              </Link>

              <MenuItem icon={<SignOutIcon />}>Выйти</MenuItem>
            </DropdownMenu>
          </>
        ) : (
          <Skeleton />
        )}
      </UserWrapper>
    </HeaderEndWrapper>
  );
};

//
const HeaderEndWrapper = tw.div`
flex
items-center
gap-6
`;

//
const UserWrapper = tw.div`
flex
items-center
gap-2
`;

//
const Title = tw.span`
subtitle1
block
text-light-contrast
dark:text-dark-contrast
`;
