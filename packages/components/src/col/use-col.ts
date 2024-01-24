import { CSSProperties, computed, inject } from "vue";
import { ColProps } from "./col";
import { rowContextKey } from "../row/row";

export const useCol = (props: ColProps) => {
  const { span, offset } = props;

  // 拿到row注入的上下文
  const { gutter } = inject(rowContextKey, { gutter: computed(() => 0) });

  // 计算样式 列间隔值为多少
  const style = computed(() => {
    const styles: CSSProperties = {};
    if (gutter.value) {
      styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`;
    }
    return styles;
  });

  const classList = computed(() => {
    return ["qf-col", `qf-col-${span}`, `qf-col--offset-${offset}`];
  });

  return {
    style,
    classList,
  };
};
