<template>
  <qf-checkbox-group v-model="checkedList" @change="handleChange">
    <qf-checkbox label="option1">选项1</qf-checkbox>
    <qf-checkbox label="option2">选项2</qf-checkbox>
  </qf-checkbox-group>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checkedList = ref(["option1"]);

const handleChange = (vals: string[]) => {
  console.log("checked", vals);
};
</script>
