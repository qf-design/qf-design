import { computed } from "vue";
import { ButtonProps } from "./button";

export const useButton = (props: ButtonProps) => {
  const { disabled } = props;

  const _props = computed(() => {
    return {
      ariaDisabled: disabled,
      disabled: disabled,
    };
  });

  return {
    _props,
  };
};
