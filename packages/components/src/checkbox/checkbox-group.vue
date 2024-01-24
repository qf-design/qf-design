<template>
  <div :class="classList">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { CheckboxGroupProps } from "./checkbox";
import { useCheckboxGroup } from "./use-checkbox-group";
import { defineModel } from "vue";

defineOptions({
  name: "qf-checkbox-group",
});

const props = defineProps<CheckboxGroupProps>();

// 定义需要触发的emit事件
const emit = defineEmits(["change", "update:modelvalue"]);

// 通过defineModel可以获取到 v-model 传递过来的值，并且可以方便地进行更新
// 参考文档: https://cn.vuejs.org/guide/components/v-model.html#basic-usage
const model = defineModel<string[]>({
  // 通过这种方式，我们可以定义 v-model 的默认值
  default() {
    return [];
  },
});

const { classList } = useCheckboxGroup(props, emit, model);
</script>
