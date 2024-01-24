import { TabProps } from "./tabs";
import { computed } from "vue";

export const useTabs = (
  props: TabProps,
  emit: (event: "update:activeKey", ...args: any[]) => void,
) => {
  /**
   * 计算当前激活的tab index 如果没有activeKey 默认为0
   * 负责activeKey对应的index
   */
  const activeIndex = computed(() => {
    if (!props.activeKey) {
      return 0;
    }
    const index = props.data.findIndex(
      (item) => item.value === props.activeKey,
    );
    return index;
  });

  const handleUpdate = (value: string) => {
    emit("update:activeKey", value);
  };

  return {
    activeIndex,
    handleUpdate,
  };
};
