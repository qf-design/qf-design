<template>
  <label class="switch" :class="classList">
    <input
      type="checkbox"
      v-model="selfModel"
      class="qf-switch__input"
      :disabled="isDisabled"
    />

    <div class="qf-switch__inner">
      <!-- https://cn.vuejs.org/api/built-in-directives.html -->
      <span class="active-text" v-text="activeText" v-if="selfModel"></span>
      <span class="qf-switch__slider">
        <svg
          viewBox="25 25 50 50"
          class="qf-switch__loading-icon"
          v-if="loading"
        >
          <circle cx="50" cy="50" r="20"></circle>
        </svg>
      </span>
      <span
        class="inactive-text"
        v-text="inactiveText"
        v-if="!selfModel"
      ></span>
    </div>
  </label>
</template>

<script lang="ts" setup>
import { defineModel } from "vue";
import { SwitchProps } from "./switch";
import { useSwitch } from "./use-switch";

defineOptions({
  name: "qf-switch",
});

const emit = defineEmits(["change"]);
const model = defineModel({
  default: false,
});
const props = withDefaults(defineProps<SwitchProps>(), {});

const { selfModel, classList, isDisabled, loading } = useSwitch(
  props,
  emit,
  model,
);
</script>

<style>
/* 样式可以根据您的需求进行调整 */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch--loading {
  cursor: not-allowed;
}

.switch--disabled {
  opacity: 0.5;
  pointer-events: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #2196f3;
}
</style>
