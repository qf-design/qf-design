<template>
  <qf-upload
    accept="image/*"
    multiple
    :action="handleUpload"
    v-model="fileList"
  >
    <qf-button>点击上传(仅图片)</qf-button>
  </qf-upload>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

const handleUpload = async ({ file }) => {
  return Promise.resolve({
    // 文件id 用随机数
    id: Math.floor(Math.random() * 1000),
    // 文件名称
    name: file.name,
  });
};

const fileList = shallowRef([]);
</script>
