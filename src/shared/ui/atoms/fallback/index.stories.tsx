import type { Meta, StoryObj } from "@storybook/react";

import { Fallback as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/Fallback",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Fallback: Story = {
  args: {
    children: <>Children</>,
    fallbackElement: <>Fallback</>,
    isLoading: true,
  },
};
