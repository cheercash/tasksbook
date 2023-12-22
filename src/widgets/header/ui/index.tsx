import {
  AddCircleIcon,
  Avatar,
  Container,
  MenuItem,
  MoonIcon,
  PersonIcon,
  SettingsIcon,
  SignOutIcon,
  StarIcon,
} from "root/shared/ui/atoms";
import { Button } from "root/shared/ui/molecules";
import { DropdownMenu } from "root/shared/ui/organisms";
import tw from "tailwind-styled-components";

import AvatarImage from "root/shared/assets/avatar.jpeg";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <HeaderEl>
      <HeaderContainer>
        <Button
          color="primary"
          icon={<AddCircleIcon />}
        >
          Новая задача
        </Button>
        <HeaderEndWrapper>
          <WelcomeText>Хорошего дня, username</WelcomeText>
          <UserWrapper>
            <Avatar
              placeholder="user name"
              src={AvatarImage}
              size="md"
            />
            <DropdownMenu
              alignX="end"
              alignY="bottom"
              buttonColor="inherit"
              buttonSize="sm"
              menuWrapperClassName="min-w-48"
            >
              <MenuItem icon={<PersonIcon />}>Личный кабинет</MenuItem>
              <MenuItem icon={<MoonIcon />}>Тема: тёмная</MenuItem>
              <MenuItem icon={<SettingsIcon />}>Настройки</MenuItem>
              <MenuItem icon={<StarIcon className="text-accents-primary" />}>
                <span className="text-accents-primary">Премиум</span>
              </MenuItem>
              <MenuItem icon={<SignOutIcon />}>Выйти</MenuItem>
            </DropdownMenu>
          </UserWrapper>
        </HeaderEndWrapper>
      </HeaderContainer>
    </HeaderEl>
  );
};

//
const HeaderEl = tw.header`
flex
items-center
lg:h-[var(--header-h-lg)]
bg-light-main
dark:bg-dark-main
`;

//
const HeaderContainer = tw(Container)`
flex
items-center
justify-between
`;

//
const HeaderEndWrapper = tw.div`
flex
items-center
gap-6
`;

//
const WelcomeText = tw.span`
subtitle1
block
text-light-contrast
dark:text-dark-contrast
`;

//
const UserWrapper = tw.div`
flex
items-center
gap-2
`;
