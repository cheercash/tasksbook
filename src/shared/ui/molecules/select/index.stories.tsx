import type { Meta, StoryObj } from "@storybook/react";

import { Select as Component } from "./index";
import { CocaColaIcon, MenuItem, SuccessIcon, WarningIcon } from "../../atoms";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Molecules/Select",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Select: Story = {
  args: {
    title: "Select title",
    fullWidth: true,
    icon: <CocaColaIcon />,
    children: (
      <>
        <MenuItem icon={<WarningIcon />}>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem icon={<SuccessIcon />}>Item 3</MenuItem>
        <MenuItem>Item 4</MenuItem>
        <MenuItem disabled>Item 5</MenuItem>
      </>
    ),
  },
  render: (props) => (
    <div className="w-64">
      <Component {...props} />
    </div>
  ),
};
