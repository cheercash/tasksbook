import type { Meta, StoryObj } from "@storybook/react";

import { Container as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/Container",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Container: Story = {
  args: {},
  render: (props) => (
    <Component {...props}>
      <div className="bg-light-contrast dark:bg-dark-contrast"></div>
    </Component>
  ),
};
