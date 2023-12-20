import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown as Component } from "./index";
import { useState } from "react";
import { Button, IconButton } from "../../molecules";
import { Menu, MenuItem, WarningIcon } from "..";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/Dropdown",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Dropdown: Story = {
  args: {
    alignX: "center",
    alignY: "bottom",
    isOpen: false,
    anchor: (
      <IconButton size="sm">
        <WarningIcon />
      </IconButton>
    ),
    children: (
      <Menu>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Send</MenuItem>
        <MenuItem>Duplicate</MenuItem>
      </Menu>
    ),
  },
  render: (props) => (
    <div className="w-screen h-screen flex justify-center items-center">
      <Component {...props} />
    </div>
  ),
};
