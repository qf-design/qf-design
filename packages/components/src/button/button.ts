// import { ExtractPropTypes } from 'vue'

export type buttonType = "success" | "primary" | "warning" | "danger" | "info";
export interface ButtonProps {
  type: buttonType;
  disabled?: boolean;
}
