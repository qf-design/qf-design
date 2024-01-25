import { describe, expect, it } from "vitest";
import Card from "./card.vue";
import { mount } from "@vue/test-utils";

describe("Card 卡片", () => {
  it("header & footer", () => {
    const wrapper = mount(Card, {
      slots: {
        header: "header",
        footer: "footer",
      },
    });

    // 拿到顶部的dom 转成 text 然后判断是否有header
    expect(wrapper.find(".qf-card__header").text()).toBe("header");

    // 拿到底部的dom转成 text判断是否有 footer
    expect(wrapper.find(".qf-card__footer").text()).toBe("footer");
  });

  it("shadow type", async () => {
    const wrapper = mount(Card, {
      props: {
        shadowType: "never",
      },
    });

    // 判断card上有没有never对应的calssName
    expect(wrapper.classes()).toContain("qf-card--never");

    await wrapper.setProps({
      shadowType: "hover",
    });

    expect(wrapper.classes()).toContain("qf-card--hover");
  });
});
