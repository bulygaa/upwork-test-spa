import React, { SelectHTMLAttributes } from "react";

export interface SelectProps
  extends Partial<SelectHTMLAttributes<SelectProps>> {
  options: {
    label: string;
    value: string;
  }[];
  styles?: Record<string, string>;
}
