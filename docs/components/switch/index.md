# Switch 开关

## 基础用法

你可以用`v-model`属性来绑定switch 开关

<preview path="./switch-base.vue" title="基础用法"></preview>


## 禁用

设置`disable`后switch组件会被禁用，无法进行操作

<preview path="./switch-disbale.vue" title="禁用"></preview>

## loading

通过`loading`属性可以显示加载中的开关

<preview path="./switch-loading.vue" title="加载中"></preview>

## 修改样式

你可以通过css变量来控制switch组件的样式变化，搭配`active-text`和inactive-text
属性获得更好的效果

<preview path="./switch-theme.vue" title="样式"></preview>

## Switch 字段

| 参数                   | 说明    | 类型      | 可选值                                                   | 默认值   |
|----------------------|-------|---------|-------------------------------------------------------|-------|
| v-model / modelValue | 双向绑定值 | boolean  |                                                       | false     |
| loading                  | 加载中 | boolean  |                                                       | false     |
| disabled             | 是否禁用  | boolean |                                      | false |    |
| active-text                  | 激活时文案 | string  |                                                       |      |
| inactive-text                  | 未激活时文案 | string  |                                                       |      |

## Switch 事件

| 事件名    | 说明       | 类型                   |
|--------|----------|----------------------|
| change | 开关变化时触发 | (val: boolean) => void |
