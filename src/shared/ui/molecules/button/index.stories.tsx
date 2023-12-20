import type { Meta, StoryObj } from "@storybook/react";

import { Button as Component } from "./index";
import { CocaColaIcon } from "../../atoms";

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
    // Just an example of a rectangular icon
    icon: <CocaColaIcon />,
  },
};
