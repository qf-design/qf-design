import { RowProps, rowContextKey } from "./row";
import { CSSProperties, computed, provide } from "vue";

export const useRow = (props: RowProps) => {
  const { justify, align } = props;

  const gutter = computed(() => props.gutter ?? 0);

  // 将gutter通过provide注入，提供给col组件
  provide(rowContextKey, { gutter });

  // 根据gutter计算样式
  const style = computed(() => {
    const styles: CSSProperties = {};
    if (!props.gutter) {
      return styles;
    }

    styles.marginRight = styles.marginLeft = `-${gutter.value / 2}px`;
    return styles;
  });

  const classList = computed(() => [
    "qf-row",
    justify !== "start" ? `qf-rows--justify-${justify}` : "",
    align ? `qf-rows-align-${align}` : "",
  ]);

  return {
    style,
    classList,
  };
};
