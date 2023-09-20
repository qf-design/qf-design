import { defineComponent, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
const withIntall = (main, extra) => {
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  return main;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "button",
  props: {
    type: null
  },
  setup(__props) {
    defineOptions({ name: "qf-button" });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["qf-button", {
          "qf-button--primary": __props.type === "primary"
        }])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const button_vue_vue_type_style_index_0_scoped_7b0257f1_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7b0257f1"]]);
withIntall(Button);
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "tabs",
  setup(__props) {
    defineOptions({ name: "qf-tabs" });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, "标签页");
    };
  }
});
const tabs_vue_vue_type_style_index_0_lang = "";
withIntall(_sfc_main);
const components = [Button, _sfc_main];
const index = {
  install: (app) => {
    for (const c in components) {
      app.use(components[c]);
    }
  }
};
export {
  Button,
  _sfc_main as Tabs,
  index as default
};
