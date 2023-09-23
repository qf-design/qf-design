<template>
  <div class="qf-tabs" :style="{ width: width + 'px' }">
    <div
      @click="handle(item.value)"
      class="qf-tabs_item"
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item.title }}
    </div>
    <div
      class="qf-tabs__select"
      :style="{
        transform: `translateX(${(width / data.length) * activeIndex}px)`,
        width: `${width / data.length}px`,
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import "./style/index.less";
import { Tab } from "./tabs";
import { computed } from "vue";

defineOptions({ name: "qf-tabs" });

const props = defineProps<{
  /** 当前标签页展示的数据 */
  data: Tab[];
  /** 双向绑定的值 */
  activeKey?: any;
  /** 宽度 */
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

const handle = (value: string) => {
  emit("update:activeKey", value);
};
</script>
