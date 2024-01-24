<template>
  <qf-checkbox v-model="checked">选项1</qf-checkbox>
</template>

<script setup lang="ts">
import { ref } from "vue";

const checked = ref(false);
</script>
