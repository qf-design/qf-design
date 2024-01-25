import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Upload from "./upload.vue";

// 模拟获取文件的函数

describe("Upload 组件", () => {
  // 测试上传文件
  it("upload file", async () => {
    const wrapper = mount(Upload, {
      props: {
        // 模拟action返回的数据
        action: async ({ file }: { file: File }) => {
          return {
            id: 1,
            name: file.name,
          };
        },
      },
    });

    const file = new File(["content"], "test.txt");
    // 获取获取文件
    mockGetFile(wrapper.find("input").element, [file]);
    // 触发改变文件的事件
    await wrapper.find("input").trigger("change");
    expect(wrapper.find(".qf-upload__item:first-child").text()).toContain(
      "test.txt",
    );
  });

  // 测试超查过文件最大数限制
  it("maxFiles", async () => {
    const wrapper = mount(Upload, {
      props: {
        maxFiles: 1,
        action: async ({ file }: { file: File }) => {
          return {
            id: Math.floor(Math.random() * 1000),
            name: file.name,
          };
        },
      },
    });

    const files = [
      new File(["content"], "test1.txt"),
      new File(["content"], "test2.txt"),
    ];

    // 模拟获取
    mockGetFile(wrapper.find("input").element, files);

    // 触发文件改变事件
    await wrapper.find("input").trigger("change");
    // 断言列表中只有一个文件
    expect(wrapper.findAll(".qf-upload__item")).toHaveLength(1);

    // 断言 exceed 事件触发
    expect(wrapper.emitted().exceed).toHaveLength(1);
  });
});
