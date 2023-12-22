import type { Meta, StoryObj } from "@storybook/react";

import { Header as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Widgets/Header",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Header: Story = {
  args: {},
};
