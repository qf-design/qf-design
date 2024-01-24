import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Col from "./col.vue";

describe("Col 组件", () => {
  it("create", () => {
    const wrapper = mount(Col);

    expect(wrapper.classes()).toContain("qf-col");
  });
});
