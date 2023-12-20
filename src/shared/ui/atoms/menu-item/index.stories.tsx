import type { Meta, StoryObj } from "@storybook/react";

import { MenuItem as Component } from "./index";
import { CocaColaIcon } from "..";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/MenuItem",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const MenuItem: Story = {
  args: {
    children: "I am menu item",
    icon: <CocaColaIcon />,
  },
};
