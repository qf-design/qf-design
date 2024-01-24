# Layout 布局

## 基础用法

通过`row`和`col`组件，可以快速创建基础栅格布局，`col`组件的`span`属性可以帮助我们自由的进行布局组合

`row`共分为24列，你可以通过设置`col`span属性，控制其占据多少列

<preview path="./layout.vue" title="基础布局使用"></preview>

## 栅格间隔

您可以通过`gutter`属性便捷的控制布局的间隔

<preview path="./layout-gutter.vue" title="栅格间隔"></preview>

## 列偏移 Offset

`col`组件的`offset`属性可以控制列的偏移，满足不同场景需求

<preview path="./layout-offset.vue" title="列偏移"></preview>

## Row 字段
| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| gutter    |  栅格间隔  | number  |                                | 0 |
| justify    | 栅格水平排列方式 | enum  | start/end/center/space-around/space-between/space-evenly | start |
| align | 栅格垂直布局 | enum | top/middle/bottom | —                                                  |    |

## Col 字段


| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| span    |  栅格所占列数  |  number  |                                | 24 |
| offset    | 栅格左侧的间隔列数 | numer  | | 0 |