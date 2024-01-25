# Input 输入框

## 基础用法

你可以使用`v-model`来双向绑定输入框，也可以通过`change`事件监听input的值输入变化

<preview path="./input-base.vue" title="基础输入框"></preview>

## disabled

设置`disabled`属性后，input组件会被禁用，无法进行输入

<preview path="./input-disabled.vue" title="禁用输入框"></preview>


## closable

使用`closable`属性可以显示清空按钮，一键清空内容
<preview path="./input-closable.vue" title="显示清空按钮"></preview>


## 插槽
input组件提供了`prefix` 和 suffix 两个插槽，你可以方便根据你的场景进行添加

<preview path="./input-prefix.vue" title="prefix插槽"></preview>


<preview path="./input-suffix.vue" title="suffix插槽"></preview>

## Input 字段

| 参数                 | 说明                | 类型      | 可选值                                             | 默认值 |
|--------------------|-------------------|---------| -------------------------------------------------- |-----|
| modelValue/v-model | input值 支持 v-model | string  |                                |     |
| disabled           | 是否禁用              | boolean |  | -   | false |
| closable           | 是否显示清除按钮          | boolean |  | —   | false   |
| placholder         | input占位符          | string  |  | —   |    |

## Input 插槽

| 插槽     | 说明       |
|--------|----------| 
| prefix | input前插槽 |
| suffix | input后插槽 | 

## Input 事件

| 事件名    | 说明       | 类型                   |
|--------|----------|----------------------|
| change | 输入值变化时触发 | (val: string) => void |
| focus  | 输入值聚焦时触发 | () => void           |
| blur   | 输入值失焦时触发 | () => void           |

