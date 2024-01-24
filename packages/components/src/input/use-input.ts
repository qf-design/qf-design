import { Ref, computed, onMounted, ref, watch } from "vue";
import { InputProps } from "./input";

export const useInput = (
  props: InputProps,
  model: Ref<string>,
  emit: (event: "focus" | "blur" | "change", ...args: any[]) => void,
) => {
  // 拿到禁用和可关闭的状态
  const { disabled, closable } = props;

  // 内部维护的输入框的值
  const selfModel = ref("");

  // 是否聚焦状态
  const isFocus = ref(false);

  onMounted(() => {
    // 组件挂载后，将内部维护的输入框初始值 化为 v-model 绑定的值
    selfModel.value = model.value;
  });

  /**
   * 观察输入框数据变化，每次变化同步到v-model上
   */
  watch(selfModel, (val: string) => {
    model.value = val;
    // 抛出change事件，通知父组件输入框值发生变
    emit("change", val);
  });

  const classList = computed(() => {
    return [
      // 输入框基础样式
      "qf-input",
      // 如果输入框禁用，则 添加禁用样式
      disabled ? "qf-input--disabled" : "",
      // 如果输入框获得焦点，则添加焦点样式
      isFocus.value ? "qf-input--focus" : "",
    ];
  });

  // 点击清空
  const onClose = () => {
    // 点击关闭按钮是，清空输入框的值
    selfModel.value = "";
  };

  // 聚焦事件
  const onFocus = () => {
    // 输入框获得焦点时，更新焦点状态为true
    isFocus.value = true;

    // 触发 focus 事件 通知父组件输入框获取焦点
    emit("focus");
  };

  const onBlur = () => {
    // 输入框失去焦点 更新焦点状态为false
    isFocus.value = false;
    // 通知 父组件输入框失去焦点 触发 blur事件
    emit("blur");
  };

  return {
    selfModel,
    classList,
    onClose,
    onFocus,
    onBlur,
    closable,
    disabled,
  };
};
