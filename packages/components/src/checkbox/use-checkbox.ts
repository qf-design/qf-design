import { computed, ref, nextTick, inject } from "vue";
import { CheckboxProps, checkboxContextKey } from "./checkbox";

export const useCheckbox = (
  props: CheckboxProps,
  emit: (event: "change" | "update:modelValue", ...args: any[]) => void,
) => {
  // 通过inject获取checkbox-group注入的上下文
  const checkboxContext = inject(checkboxContextKey, undefined) as any;
  // 判断当前checkbox 是否为group模式
  const isGroup = computed(() => checkboxContext !== undefined);
  // 内部的model变量，处理外部没有传入v-model的情况
  const selfModel = ref(false);

  // 计算属性 model，拆分为get和set
  const model = computed({
    get() {
      // 组模式下， 返回组的值
      if (isGroup.value) {
        return checkboxContext?.modelValue?.value;
      }
      // 非组模式下，先返回传入的v-model的值，若为undefined, 也就是没有传入v-model, 则使用内部值
      return props.modelValue ?? selfModel.value;
    },
    set(val: boolean) {
      // 组模式下，需要将值触发到checkbox-group的change事件，
      // checkbox-group.changeHandler触发后会保存该值, 用于后续checkbox选中状态判断
      if (isGroup.value) {
        checkboxContext?.changeHandler(props.label);
      } else {
        // 非组模式下，只需要更新v-model和自身内部的model变量即可
        emit("update:modelValue", val);
        selfModel.value = val;
      }
    },
  });

  // 判断是否禁用
  const isDisabled = computed(() => props.disabled);

  // 判断是否选中
  const isChecked = computed(() => {
    // 组模式
    // model.value为checkbox-group的属性, 判断checkbox.label是否在model.value内
    if (isGroup.value && Array.isArray(model.value)) {
      return model.value.includes(props.label);
    } else {
      // 非组模式 返回当前model的值即可
      return model.value;
    }
  });

  // 根据不同的情况，返回不同的className
  const classList = computed(() => {
    return [
      "qf-checkbox",
      props.disabled ? `qf-checkbox--disabled` : "",
      isChecked.value ? `qf-checkbox--checked` : "",
    ];
  });

  // 更新函数
  const handleUpdate = async () => {
    // 禁用情况下，直接不让更新
    if (isDisabled.value) return;
    model.value = !model.value;

    // 通过nextTick, 防止触发change事件时，model的值还未更新
    await nextTick();
    emit("change", model.value);
  };

  return {
    classList,
    handleUpdate,
    model,
  };
};
