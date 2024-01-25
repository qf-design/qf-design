import { computed } from "vue";
import { CardProps } from "./card";

export const useCard = (props: CardProps) => {
  const classList = computed(() => {
    return [
      "qf-card",
      props.shadowType === "never" ? "qf-card--never" : "",
      props.shadowType === "hover" ? "qf-card--hover" : "",
    ];
  });

  return {
    classList,
  };
};
