<template>
  <button
    v-bind="_props"
    class="qf-button"
    :class="[
      type ? `qf-button--${type}` : '',
      { 'qf-button--disabled': disabled },
    ]"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
import type { ButtonProps } from "./button";
import { useButton } from "./use-button";

// 在tsconfig type 中定义 unplugin-vue-define-options/macros-global
defineOptions({ name: "qf-button" });

const props = defineProps<ButtonProps>();

const { _props } = useButton(props);
</script>
