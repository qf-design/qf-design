export interface Tab {
  /** 标题 */
  label: string;
  /** key */
  value: any;
}

export interface TabProps {
  /** 当前标签页展示的数据 */
  data: Tab[];
  /** 双向绑定的值 */
  activeKey?: any;
  /** 宽度 */
  width: number;
}
