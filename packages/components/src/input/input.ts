export interface InputProps {
  // 双向绑定的值
  modelValue?: string;

  // 是否禁用
  disabled?: boolean;

  // 是否带一键清除
  closable?: boolean;
  placeholder?: string;
}
