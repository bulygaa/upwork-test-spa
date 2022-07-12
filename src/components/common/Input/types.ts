import { ChangeEvent } from "react";

export interface InputProps extends Partial<HTMLInputElement>  {
  styles?: Record<string, string>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
