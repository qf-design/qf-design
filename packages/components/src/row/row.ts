export const rowContextKey = "rowContext";

export interface RowProps {
  // 列间隔
  gutter?: number;
  justify?:
    | "start"
    | "end"
    | "center"
    | "space-around"
    | "space-between"
    | "space-evenly";
  align: "top" | "middle" | "bottom";
}
