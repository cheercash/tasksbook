import type { Meta, StoryObj } from "@storybook/react";

import { ButtonBase as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/ButtonBase",
  component: Component,
};

export default meta;
type Story = StoryObj<typeof Component>;

export const ButtonBase: Story = {
  args: {
    children: <span>I am button base</span>,
    color: "primary",
    shape: "rectangle",
    size: "md",
    variant: "contained",
    fullWidth: false,
    disabled: false,
  },
};
