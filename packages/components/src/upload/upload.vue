<template>
  <div :class="classList" @click="handleClick">
    <input
      type="file"
      class="qf-upload__input"
      @change="handleFileChange"
      :multiple="multiple"
      :accept="accept"
      ref="inputRef"
    />
    <slot></slot>

    <div v-if="fileList.length > 0">
      <ul>
        <slot name="file-item">
          <li class="qf-upload__item" v-for="file in fileList" :key="file.id">
            <span class="qf-upload__item-inner">
              <img
                :src="file.thumbUrl"
                v-if="file.thumbUrl"
                width="30"
                height="30"
              />
              <span>{{ file.name }}</span>
            </span>
            <i @click.stop="removeFile(file)" class="qf-upload__close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                fill="#ddd"
              >
                <path
                  d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z"
                ></path>
              </svg>
            </i>
          </li>
        </slot>
      </ul>
    </div>

    <slot name="file-list"></slot>
  </div>
</template>

<script setup lang="ts">
import { UploadProps } from "./upload";
import { useUpload } from "./use-upload";
import { ref, defineModel } from "vue";

defineOptions({
  name: "qf-upload",
});

const inputRef = ref();

const props = withDefaults(defineProps<UploadProps>(), {
  maxFiles: Infinity,
});

const model = defineModel({
  default: [],
});

const emit = defineEmits(["exceed", "error"]);

const { classList, handleFileChange, fileList, removeFile, handleClick } =
  useUpload(props, model, emit, inputRef);
</script>
