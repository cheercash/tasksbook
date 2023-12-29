import Link from "next/link";
import { session } from "root/entities";
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
        <session.ui.HeaderUserBlock />
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
