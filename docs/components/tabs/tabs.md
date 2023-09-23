# 标签页组件

## 基础用法
Tabs 组件提供了选项卡功能， 默认选中第一个标签页。 可以通 v-model:active 进行双向绑定

<preview path="./example.vue" ></preview>

## 字段说明

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| width    | 宽度   | number  | -  | 0 |
| data | 标签数据 | { title: string, value: any }[] | —                                                  | -  |
| v-model:activeKey | 与value属性双向绑定 | any | —                                                  | -  |