import type { Meta, StoryObj } from "@storybook/react";

import { DropdownMenu as Component } from "./index";
import { MenuItem } from "../../atoms";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Organisms/DropdownMenu",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const DropdownMenu: Story = {
  args: {
    alignX: "start",
    alignY: "bottom",
    buttonColor: "inherit",
    buttonSize: "sm",
    buttonTitle: "",
    buttonVariant: "contained",
    menuTitle: "",
    menuTitlePos: "start",
    children: (
      <>
        <MenuItem onClick={() => alert("Delete")}>Delete</MenuItem>
        <MenuItem onClick={() => alert("Copy")}>Copy</MenuItem>
        <MenuItem onClick={() => alert("Send")}>Send</MenuItem>
        <MenuItem onClick={() => alert("Duplicate")}>Duplicate</MenuItem>
        <MenuItem
          disabled
          onClick={() => alert("Disabled (wouldn't work)")}
        >
          Disabled
        </MenuItem>
      </>
    ),
  },
};
