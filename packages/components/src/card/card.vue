<template>
  <div :class="classList">
    <div class="qf-card__header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div class="qf-card__content">
      <slot />
    </div>
    <div class="qf-card__footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CardProps } from "./card";
import { useCard } from "./use-card";
defineOptions({
  name: "qf-card",
});

const props = withDefaults(defineProps<CardProps>(), {
  shadowType: "always",
});

const { classList } = useCard(props);
</script>
