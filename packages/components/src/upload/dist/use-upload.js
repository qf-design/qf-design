"use strict";
exports.__esModule = true;
exports.useUpload = void 0;
var vue_1 = require("vue");
exports.useUpload = function (props, model, emit, inputRef) {
    // 结构出需要的属性
    var action = props.action, maxFiles = props.maxFiles;
    var fileList = vue_1.ref(props.modelValue);
    /**
     * 监听绑定值的变化，每次变化同步
     */
    vue_1.watch(model, function (val) {
        fileList.value = val;
    });
    var handleFileChange = function (event) {
        // 定义事件目标的类型
        var input = event.target;
        if (input.files) {
            // 讲类数组转换成数组
            var files = Array.from(input.files);
            if (maxFiles && files.length + fileList.value.length > maxFiles) {
                // 超出上传文件数量
                emit("exceed");
                return;
            }
            uploadFiles(files);
        }
    };
    // 上传文件
    var uploadFiles = function (files) {
        files.forEach(function (file) {
            var formData = new FormData();
            formData.append("file", file);
            /**
             * 这时候调用上层传入的action方法
             * action方法为使用者实际的上传动作
             */
            action({
                file: file,
                formData: formData
            })
                .then(function (fileItem) {
                /**
                 * 使用者上传成功后，将文件添加到fileList留着渲染
                 */
                fileList.value.push(fileItem);
                model.value = fileList.value;
            })["catch"](function () {
                emit("error", file);
            });
        });
    };
    var handleClick = function () {
        // 清空之前的file input 里的value
        inputRef.value.value = "";
        // 模拟点击上传文件input 吊起原生选择
        inputRef.value.click();
    };
    /**
     * 移除文件
     */
    var removeFile = function (file) {
        // 拿到要删除文件的下标
        var index = fileList.value.indexOf(file);
        if (index !== -1) {
            // 说明数组里有这个数据,那么直接删除
            fileList.value.splice(index, 1);
            // 更新双绑的数据
            model.value = fileList.value;
        }
    };
    var classList = vue_1.computed(function () {
        return ["qf-upload"];
    });
    return {
        classList: classList,
        removeFile: removeFile,
        handleClick: handleClick,
        handleFileChange: handleFileChange,
        fileList: fileList
    };
};
