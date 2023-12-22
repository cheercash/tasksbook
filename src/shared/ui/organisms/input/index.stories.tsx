import type { Meta, StoryObj } from "@storybook/react";

import { Input as Component } from "./index";
import { WarningIcon } from "../../atoms";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Organisms/Input",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Input: Story = {
  args: {
    name: "input-name",
    label: "Label",
    placeholder: "Placeholder",
    hintText: "Some error just happened",
    hintVariant: "danger",
    icon: <WarningIcon />,
  },
  render: (props) => (
    <div className="w-80">
      <Component {...props} />
    </div>
  ),
};
