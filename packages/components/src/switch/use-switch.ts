import { Ref, computed, watch, ref } from "vue";
import { SwitchProps } from "./switch";

// 使用Switch的自定义hook
export const useSwitch = (
  props: SwitchProps, // Switch组件的props
  emit: (event: "change") => void, // 用于触发change事件的函数
  model: Ref<boolean>, // 用于存储开关状态的引用
) => {
  const { disabled, loading, activeText, inactiveText } = props; // 从props中解构需要的属性
  const selfModel = ref(props.modelValue!); // 使用ref创建一个自身的model

  // 监听selfModel的变化
  watch(selfModel, (val: boolean) => {
    model.value = val; // 更新model的值
    emit("change"); // 触发change事件
  });

  // 计算class列表
  const classList = computed(() => {
    return [
      "qf-switch",
      disabled ? "qf-switch--disabled" : "",
      loading ? "qf-switch--loading" : "",
      selfModel.value ? "qf-switch--checked" : "",
    ];
  });

  // 计算是否禁用
  const isDisabled = computed(() => disabled || loading);

  return {
    selfModel, // 自身的model
    isDisabled, // 是否禁用
    activeText, // 激活时的文本
    inactiveText, // 未激活时的文本
    classList, // class列表
    loading, // 是否加载中
  };
};
