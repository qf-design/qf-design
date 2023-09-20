<template>
  <button
    class="qf-button"
    :class="{
      'qf-button--primary': type === 'primary',
    }"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import './style/index.less';
defineOptions({ name: "qf-button" });

defineProps<{
  /** 按钮类型 */
  type?: "primary" | "default";
}>();
</script>
