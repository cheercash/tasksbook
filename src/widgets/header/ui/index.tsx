import { useUnit } from "effector-react";
import Link from "next/link";
import { session } from "root/entities";
import { switchTheme } from "root/features";
import { SwitchTheme } from "root/features/switch-theme/ui";
import {
  AddCircleIcon,
  Avatar,
  Container,
  Fallback,
  MenuItem,
  PersonIcon,
  SettingsIcon,
  SignOutIcon,
  Skeleton,
  StarIcon,
} from "root/shared/ui/atoms";
import { Button } from "root/shared/ui/molecules";
import { DropdownMenu } from "root/shared/ui/organisms";
import tw from "tailwind-styled-components";

export type HeaderProps = {};

export const Header = ({}: HeaderProps) => {
  return (
    <HeaderEl>
      <HeaderContainer>
        <Link href={{ query: { modal: "create-task" } }}>
          <Button
            color="primary"
            icon={<AddCircleIcon />}
          >
            Новая задача
          </Button>
        </Link>
        <UserBlock />
      </HeaderContainer>
    </HeaderEl>
  );
};

const HeaderEl = tw.header`
flex
items-center
lg:h-[var(--header-h-lg)]
bg-light-main
dark:bg-dark-main
`;

const HeaderContainer = tw(Container)`
flex
items-center
justify-between
`;

//
const UserBlock = () => {
  const [isAuthorizing, user] = useUnit([
    session.model.stores.$isAuthorizing,
    session.model.stores.$user,
  ]);

  const fullName = [user?.firstName, user?.lastName].join(" ");

  return (
    <UserWrapper>
      <Fallback
        isLoading={isAuthorizing}
        fallbackElement={<Skeleton />}
      >
        {user && <WelcomeText>Хорошего дня, {fullName}</WelcomeText>}
      </Fallback>

      <UserActionsWrapper>
        <Fallback
          isLoading={isAuthorizing}
          fallbackElement={
            <>
              <Skeleton />
              <Skeleton />
            </>
          }
        >
          <Link href={user ? "/profile" : { query: { modal: "sign-in" } }}>
            <Avatar
              placeholder={user ? fullName : ""}
              src={user?.avatarUrl}
            />
          </Link>

          <DropdownMenu
            buttonSize="sm"
            alignX="end"
            alignY="bottom"
            menuWrapperClassName="min-w-48"
            children={user ? <AuthorizedMenu /> : <NonAuthorizedMenu />}
          />
        </Fallback>
      </UserActionsWrapper>
    </UserWrapper>
  );
};

const UserWrapper = tw.div`
flex
items-center
gap-4
`;

const WelcomeText = tw.span`
subtitle1
text-light-contrast
dark:text-dark-contrast
`;

const UserActionsWrapper = tw.div`
flex
items-center
gap-2
`;

//
const AuthorizedMenu = () => (
  <>
    <MenuItem icon={<PersonIcon />}>Профиль</MenuItem>
    <SwitchTheme />
    <MenuItem icon={<StarIcon className="text-accents-primary" />}>
      <span className="text-accents-primary">Премиум</span>
    </MenuItem>
    <MenuItem icon={<SettingsIcon />}>Настройки</MenuItem>
    <MenuItem icon={<SignOutIcon className="text-accents-danger" />}>
      <span className="text-accents-danger">Выйти</span>
    </MenuItem>
  </>
);

//
const NonAuthorizedMenu = () => (
  <>
    <SwitchTheme />
    <MenuItem icon={<StarIcon className="text-accents-primary" />}>
      <span className="text-accents-primary">Премиум</span>
    </MenuItem>
    <MenuItem icon={<PersonIcon />}>Вход</MenuItem>
  </>
);
