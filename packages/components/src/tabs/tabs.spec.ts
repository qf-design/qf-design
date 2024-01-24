import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Tabs from "./tabs.vue";

describe("Tabs 组件", () => {
  it("create", () => {
    const wrapper = mount(Tabs, {
      props: {
        data: [
          {
            label: "tab1",
            value: 1,
          },
        ],
      },
      width: 300,
    });

    expect(wrapper.classes()).toContain("qf-tabs");
    expect(wrapper.text()).toContain("tab1");
  });
});
