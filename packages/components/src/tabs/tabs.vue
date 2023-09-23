<template>
  <div class="qf-tabs" :style="{ width: width + 'px' }">
    <div
      @click="handle(item.value)"
      class="qf-tabs_item"
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item.label }}
    </div>
    <div
      class="qf-tabs__select"
      :style="{
        transform: `translateX(${(width / data.length) * activeIndex}px)`,
        width: `${width / data.length}px`,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { Tab } from "./tabs";
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "qf-tabs" });

const props = defineProps<{
  data: Tab[];
  activeKey?: string;
  width: number;
}>();

const activeIndex = computed(() => {
  if (!props.activeKey) {
    return 0;
  }
  const index = props.data.findIndex((item) => item.value === props.activeKey);
  return index;
});

const emit = defineEmits(["update:activeKey"]);

const handle = (val: string) => {
  emit("update:activeKey", val);
};
</script>
