import type { Meta, StoryObj } from "@storybook/react";

import { Hint as Component } from "./index";
import { WarningIcon } from "../../atoms";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Molecules/Hint",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Hint: Story = {
  args: {
    children: "Some text",
    icon: <WarningIcon />,
  },
};
