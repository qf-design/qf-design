<template>
  <div :style="style" :class="classList">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ColProps } from "./col";
import { useCol } from "./use-col";
defineOptions({
  name: "qf-col",
});

const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  offset: 0,
});

const { style, classList } = useCol(props);
</script>
