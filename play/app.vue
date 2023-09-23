<template>
  <div>启动测试--{{ num }}</div>
  <!-- <Button></Button> -->
  <qf-button type="primary">啊啊啊</qf-button>
  <qf-tabs
    :data="[
      { label: '标签1', value: '1' },
      { label: '标签2', value: '2' },
    ]"
    :width="300"
    v-model:activeKey="num"
  ></qf-tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";

const num = ref("1");
</script>
