<template>
  <div>
    <qf-input
      placeholder="请输入你的文字"
      @change="handleChange"
      v-model="inputVal"
    ></qf-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputVal = ref("Hello World");

const handleChange = (val: string) => {
  console.log("input value", val);
};
</script>
