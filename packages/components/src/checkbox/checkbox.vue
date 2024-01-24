<template>
  <div :class="classList" @click="handleUpdate">
    <span class="qf-checkbox__inner" />
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { CheckboxProps } from "./checkbox";
import { useCheckbox } from "./use-checkbox";

defineOptions({
  name: "qf-checkbox",
});

// 通过withDefaults可以设置props的默认值
// 参考文档: https://vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration
const props = withDefaults(defineProps<CheckboxProps>(), {
  modelValue: undefined,
});

// 定义需要触发的emit事件
const emit = defineEmits(["change", "update:modelValue"]);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { classList, handleUpdate, model } = useCheckbox(props, emit);
</script>
