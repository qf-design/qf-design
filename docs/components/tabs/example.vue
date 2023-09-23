<template>
  <div>
    <qf-tabs
      v-model:activeKey="num"
      :data="[
        {
          title: '标签1',
          value: 1,
        },
        {
          title: '标签2',
          value: 2,
        },
        {
          title: '标签3',
          value: 3,
        },
        {
          title: '标签4',
          value: 4,
        },
      ]"
      :width="300"
    ></qf-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const num = ref(1);
</script>
