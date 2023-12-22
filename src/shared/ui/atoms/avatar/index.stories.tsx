import type { Meta, StoryObj } from "@storybook/react";

import { Avatar as Component } from "./index";

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: "Atoms/Avatar",
  component: Component,
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Avatar: Story = {
  args: {
    src: "https://m.gjcdn.net/fireside-post-image/900/16704428-irufzm8b-v4.jpg",
    placeholder: "фамилия имя",
  },
};

export const BrokenAvatar: Story = {
  args: {
    src: "https://m.gjcdn.net/fireside-post",
    placeholder: "фамилия имя",
  },
};
