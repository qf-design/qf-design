<template>
  <qf-upload accept="image/*" :action="handleUpload" v-model="fileList">
    <qf-button>点击上传</qf-button>
  </qf-upload>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      resolve(
        reader.result
          .toString()
          .substr(reader.result.toString().indexOf(",") + 1),
      );
    reader.onerror = (error) => reject(error);
  });
}

const handleUpload = async ({ file }) => {
  return fileToBase64(file).then((res) => {
    return {
      // 文件id 用随机数
      id: Math.floor(Math.random() * 1000),
      // 文件名称
      name: file.name,
      thumbUrl: `data:image/jpeg;base64,${res}`,
    };
  });
};

const fileList = shallowRef([]);
</script>
