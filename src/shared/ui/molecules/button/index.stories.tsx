import type { Meta, StoryObj } from "@storybook/react";

import { Button as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Molecules/Button",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Button: Story = {
  args: {
    children: "I am button",
    icon: <span className="block border rounded-full"></span>,
  },
};
