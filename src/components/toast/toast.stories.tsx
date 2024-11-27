import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./toast";
import { ToastProps } from "./toast.type";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "danger", "information", "warning"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    type: {
      control: "select",
      options: ["information", "notification"],
    },
  },
  args: {
    title: "Informasi Gais",
    message: "Lorem Ipsum blablablablablablablablalablablablablablablablabla",
    variant: "information",
    size: "medium",
    type: "information",
    duration: 3000,
  },
};

export default meta;
type Story = StoryObj<ToastProps>;

export const Default: Story = {
  args: {
    message: "Lorem Ipsum blablablablablablablablalablablablablablablablabla",
    variant: "information",
    size: "medium",
    type: "information",
  },
};

export const Success: Story = {
  args: {
    title: "Berhasil Gaisss",
    message: "Lorem Ipsum blablablablablablablablalablablablablablablablabla",
    variant: "success",
    size: "medium",
    type: "notification",
  },
};

export const Danger: Story = {
  args: {
    title: "Error Nih Gaiisss",
    message: "Lorem Ipsum blablablablablablablablalablablablablablablablabla",
    variant: "danger",
    size: "medium",
    type: "notification",
  },
};

export const Warning: Story = {
  args: {
    title: "Wah Warning Gaiss",
    message: "Lorem Ipsum blablablablablablablablalablablablablablablablabla",
    variant: "warning",
    size: "medium",
    type: "information",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};
