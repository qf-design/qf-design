import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Switch from "./switch.vue";

describe("Switch 组件", () => {
  // 测试 v-model
  it("v-model", async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        "onUpdate:modelValue": (val: boolean) => {
          wrapper.setProps({
            modelValue: val,
          });
        },
      },
    });

    // 设置CheckBox属性为true
    await wrapper.find("input").setValue(true);
    // 断言modelValue属性为true
    expect(wrapper.props("modelValue")).toBe(true);
  });

  // 测试disabled属性
  it("disabled", async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        disabled: true,
        "onUpdate:modelValue": (val: boolean) => {
          wrapper.setProps({ modelValue: val });
        },
      },
    });

    // 设置值
    await wrapper.find("input").setValue(true);
    // 断言modelValue属性为false
    expect(wrapper.props("modelValue")).toBe(false);
    // 断言change事件未被触发
    expect(wrapper.emitted().change).toBeUndefined();
  });

  // 测试loading属性
  it("loading", async () => {
    const wrapper = mount(Switch, {
      props: {
        loading: true,
      },
    });

    // 断言.qf-switch__loading-icon元素在不在
    expect(() => wrapper.get(".qf-switch__loading-icon")).not.toThrowError();

    // 设置input值为true
    await wrapper.find("input").setValue(true);

    // 断言change事件未被触发
    expect(wrapper.emitted().change).toBeUndefined();
  });

  it("active-text", async () => {
    const wrapper = mount(Switch, {
      props: {
        activeText: "是",
      },
    });

    // 断言元素不存在
    expect(() => wrapper.get(".active-text")).toThrowError();

    // 能否正常点击
    await wrapper.find("input").setValue(true);

    // 断言元素文本为 是
    expect(wrapper.get(".active-text").text()).toBe("是");
  });

  it("inactive-text", async () => {
    const wrapper = mount(Switch, {
      props: {
        inactiveText: "是",
      },
    });

    // 断言 .inactive-text 存在
    expect(() => wrapper.get(".inactive-text")).not.toThrowError();

    // 能否正常点击
    await wrapper.find("input").setValue(true);

    /**
     * 设置值为true之后
     * .inactive-text 元素就不存在了
     */
    expect(() => wrapper.get(".inactive-text")).toThrowError();

    // 这行单元测试有问题
    // expect(wrapper.get('.inactive-text').text()).toBe('是')
  });
});
