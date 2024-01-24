export const checkboxContextKey = "checkboxContext";

export interface CheckboxProps {
  // 定义label, 用于显示在checkbox前面
  label?: string;
  // 获取v-model的值
  modelValue?: boolean;
  // 是否禁用
  disabled?: boolean;
}

export interface CheckboxGroupProps {
  // 获取v-model的值
  modelValue?: string[];
}
