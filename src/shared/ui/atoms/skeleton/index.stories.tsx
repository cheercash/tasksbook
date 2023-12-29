import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/Skeleton",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Skeleton: Story = {
  args: {},
};
