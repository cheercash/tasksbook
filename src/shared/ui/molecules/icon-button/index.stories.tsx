import type { Meta, StoryObj } from "@storybook/react";

import { IconButton as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Molecules/IconButton",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const IconButton: Story = {
  args: {
    children: <span className="block border rounded-full"></span>,
  },
};
