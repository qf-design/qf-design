import type { Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T, E extends Record<string, any>>(
  main: T, // 主要组件对象，通常是一个Vue组件
  extra?: E, // 可选的额外组件对象，以键值对的形式存储
) => {
  // 将 install 方法添加到主要组件对象（main）
  (main as SFCWithInstall<T>).install = (app): void => {
    // 遍历主要组件和额外组件，使用 app.component 注册它们
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };

  // 如果提供了额外的组件
  if (extra) {
    // 遍历额外组件并将它们附加到主要组件对象上
    for (const [key, comp] of Object.entries(extra)) {
      (main as any)[key] = comp;
    }
  }

  // 返回增强后的主要组件对象，它包括 install 方法和额外的组件
  return main as SFCWithInstall<T> & E;
};
