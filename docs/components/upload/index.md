# Upload 上传组件

## 基础用法

你需要定义`action`属性，作为上传的方法，上传组件会在上传是调用该方法，将上传结果添加到文件列表中

<preview path="./upload-base.vue" title="基础用法"></preview>

## 限制特定类型文件上传

通过`accept`属性，可以用于限制上传的文件类型

<preview path="./upload-accept.vue" title="限制上传类型"></preview>


## 限制上传个数

通过`maxFiles`属性及监听`exceed`事件，可以限制上传个数

<preview path="./upload-max.vue" title="限制上传个数"></preview>

## 缩略图显示

我们可以通过action函数返回结果是添加`thumbUrl`属性来生成文件的缩略图
<preview path="./upload-thumb.vue" title="缩略图"></preview>

## Upload 字段说明

| 参数                 | 说明              | 类型                                                                                                       | 可选值                                            | 默认值      |
|--------------------|-----------------|----------------------------------------------------------------------------------------------------------| ---------------------------------------------- |----------|
| modelValue/v-model | 文件列表            | Array<{ id: string, name: string, thumbUrl: string }>                                                    |                                |          |
| action             | 上传函数，要求返回上传后的结果 | (payload: { file: File, formData: FormData }) => Promise<{ id: string, name: string, thumbUrl: string }> |                                |          |
| accept             | 允许上传的文件类型       | string                                                                                                   |  |          |
| maxFiles           | 最大上传个数          | number                                                                                                   |                                                | Infinity |
| multiple           | 是否允许上传多个        | boolean                                                                                                  |                                                | false    |

## Upload 事件说明

| 事件名    | 说明            | 类型                   |
|--------|---------------|----------------------|
| exceed | 上传超过最大上传个数时触发 | () => void           |
| error  | 上传失败时触发       | (file: File) => void |



