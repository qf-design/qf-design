<template>
  <div>
    <qf-tabs
      :data="[
        { label: '标签1', value: '1' },
        { label: '标签2', value: '2' },
        { label: '标签3', value: '3' },
        { label: '标签4', value: '4' },
      ]"
      :width="300"
      v-model:activeKey="num"
    ></qf-tabs>
  </div>
</template>
<script setup lang="ts">
defineOptions({ name: "ex-tabs" });

import { ref } from "vue";

const num = ref("1");
</script>
