<template>
  <div :class="classList" :style="style">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { RowProps } from "./row";
import { withDefaults } from "vue";
import { useRow } from "./use-row";

defineOptions({
  name: "qf-row",
});

const props = withDefaults(defineProps<RowProps>(), {
  justify: "start",
});

const { style, classList } = useRow(props);
</script>
