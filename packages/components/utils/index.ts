import { Plugin } from "vue";

type SFCWithIntall<T> = T & Plugin;

/**
 *
 * @param main 组件对象，通常是一个vue组件，比如我们的Button
 * @param extra 可选的额外组件对象，以键值对存储
 */
export const withIntall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  /**
   * 将install方法 添加到主要组件对象上
   */
  (main as SFCWithIntall<T>).install = (app) => {
    /**
     * 遍历主要组件和额外组件 使用app.component 注册它们
     */
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  /**
   * 如果提供了额外组件
   */
  if (extra) {
    /**
     * 遍历额外组件并将他们附加到主要组件对象上
     */
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }

  return main as SFCWithIntall<T> & E;
};
