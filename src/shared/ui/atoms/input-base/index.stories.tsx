import type { Meta, StoryObj } from "@storybook/react";

import { InputBase as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/InputBase",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const InputBase: Story = {
  args: {
    hasIcon: false,
    iconPos: "start",
    size: "md",
    placeholder: "Type something",
  },
};
