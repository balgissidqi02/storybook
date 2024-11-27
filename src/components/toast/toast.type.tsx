export interface ToastProps {
  variant: "success" | "danger" | "warning" | "information";
  size: "small" | "medium" | "large";
  type: "information" | "notification";
  title: string;
  message: string;
  duration?: number;
}
