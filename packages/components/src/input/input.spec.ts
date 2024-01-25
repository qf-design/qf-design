import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Input from ".";

describe("Input 组件", () => {
  it("v-model", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "123",
        "onUpdate:modelValue": (val: string) => {
          wrapper.setProps({
            modelValue: val,
          });
        },
      },
    });

    // 是否创建成功
    expect(wrapper.classes()).toContain("qf-input");

    // 找到Input 并修改值为456
    await wrapper.find("input").setValue("456");

    // 判断modelValue的值是不是456
    expect(wrapper.props("modelValue")).toBe("456");
  });

  it("without v-model", async () => {
    const wrapper = mount(Input);

    expect(wrapper.classes()).toContain("qf-input");

    await wrapper.find("input").setValue("456");

    expect(wrapper.emitted().change[0]).toEqual(["456"]);
  });

  it("disabled", async () => {
    const wrapper = mount(Input, {
      props: {
        disabled: true,
      },
    });

    // 判断是否创建成功
    expect(wrapper.classes()).toContain("qf-input");

    // 修改input的值
    await wrapper.find("input").setValue("456");
    // 不能触发change事件
    expect(wrapper.emitted().change).toBeUndefined();
  });

  it("closeable", async () => {
    const wrapper = mount(Input, {
      props: {
        modelValue: "123",
        closable: true,
      },
      attachTo: document.body,
    });

    // 聚焦
    await wrapper.find("input").trigger("focus");
    // 聚焦后清空按钮是否显示
    expect(wrapper.get(".qf-input__close").isVisible()).toBe(true);
    // 点击
    await wrapper.get(".qf-input__close").trigger("click");

    // 点击清空后双向绑定的值是否还存在
    expect(wrapper.find("input").element.value).toBe("");
  });
});
