import type { Meta, StoryObj } from "@storybook/react";

import { Menu as Component } from "./index";
import { MenuItem, WarningIcon } from "..";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/Menu",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

const Items = (
  <>
    <MenuItem
      children="Item default"
      active={false}
      disabled={false}
    />
    <MenuItem
      children="Item active"
      active={true}
      disabled={false}
    />
    <MenuItem
      children="Item active disabled"
      active={true}
      disabled={true}
      icon={<WarningIcon />}
    />
    <MenuItem
      children="Item disabled"
      active={false}
      disabled={true}
    />
    <MenuItem children="Item" />
    <MenuItem children="Item" />
    <MenuItem children="Item" />
    <MenuItem children="Item" />
    <MenuItem children="Item" />
  </>
);

export const Menu: Story = {
  args: {
    title: "Menu title",
    titlePos: "start",
    children: Items,
  },
};

export const MenuWithOverflow: Story = {
  args: {
    title: "Menu title",
    titlePos: "start",
    children: Items,
  },
  render: (props) => (
    <div className="h-64">
      <Component {...props} />
    </div>
  ),
};
