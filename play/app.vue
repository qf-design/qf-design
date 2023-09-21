<template>
  <div>
    测试管用吗 {{ num }}
    <button @click="num += 1">+1</button>
    <qf-button type="primary">组件内容哈哈哈哈</qf-button>
    <qf-tabs></qf-tabs>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const num = ref(1);
</script>
