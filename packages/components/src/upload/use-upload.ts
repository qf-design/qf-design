import { UploadProps, FileItem } from "./upload";
import { Ref, computed, ref, watch } from "vue";

export const useUpload = (
  props: UploadProps,
  model: Ref<any[]>,
  emit: (event: "exceed" | "error", ...args: any[]) => void,
  inputRef: Ref<HTMLInputElement>,
) => {
  // 结构出需要的属性
  const { action, maxFiles } = props;
  const fileList = ref(props.modelValue);

  /**
   * 监听绑定值的变化，每次变化同步
   */
  watch(model, (val) => {
    fileList.value = val;
  });

  const handleFileChange = (event: Event) => {
    // 定义事件目标的类型
    const input = event.target as HTMLInputElement;

    if (input.files) {
      // 讲类数组转换成数组
      const files = Array.from(input.files);

      if (maxFiles && files.length + fileList.value.length > maxFiles) {
        // 超出上传文件数量
        emit("exceed");
        return;
      }
      uploadFiles(files);
    }
  };

  // 上传文件
  const uploadFiles = (files: File[]) => {
    files.forEach((file) => {
      const formData = new FormData();
      formData.append("file", file);
      /**
       * 这时候调用上层传入的action方法
       * action方法为使用者实际的上传动作
       */

      action({
        file,
        formData,
      })
        .then((fileItem) => {
          /**
           * 使用者上传成功后，将文件添加到fileList留着渲染
           */
          fileList.value.push(fileItem);
          model.value = fileList.value;
        })
        .catch(() => {
          emit("error", file);
        });
    });
  };

  const handleClick = () => {
    // 清空之前的file input 里的value
    inputRef.value.value = "";

    // 模拟点击上传文件input 吊起原生选择
    inputRef.value.click();
  };

  /**
   * 移除文件
   */
  const removeFile = (file: FileItem) => {
    // 拿到要删除文件的下标
    const index = fileList.value.indexOf(file);
    if (index !== -1) {
      // 说明数组里有这个数据,那么直接删除
      fileList.value.splice(index, 1);
      // 更新双绑的数据
      model.value = fileList.value;
    }
  };

  const classList = computed(() => {
    return ["qf-upload"];
  });

  return {
    classList,
    removeFile,
    handleClick,
    handleFileChange,
    fileList,
  };
};
