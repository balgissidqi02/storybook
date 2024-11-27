import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./card";
import { fn } from "@storybook/test";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
  args: {
    variant: "light",
    title: "Title",
    label: "Halloo Gaiss",
  },
};
