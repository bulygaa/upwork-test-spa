import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<ButtonProps> {
  children?: React.ReactNode;
  styles?: Record<string, string | number>;
}
