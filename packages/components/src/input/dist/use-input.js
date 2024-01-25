"use strict";
exports.__esModule = true;
exports.useInput = void 0;
var vue_1 = require("vue");
exports.useInput = function (props, model, emit) {
    // 拿到禁用和可关闭的状态
    var disabled = props.disabled, closable = props.closable;
    // 内部维护的输入框的值
    var selfModel = vue_1.ref("");
    // 是否聚焦状态
    var isFocus = vue_1.ref(false);
    vue_1.onMounted(function () {
        // 组件挂载后，将内部维护的输入框初始值 化为 v-model 绑定的值
        selfModel.value = model.value;
    });
    /**
     * 观察输入框数据变化，每次变化同步到v-model上
     */
    vue_1.watch(selfModel, function (val) {
        model.value = val;
        // 抛出change事件，通知父组件输入框值发生变
        emit("change", val);
    });
    var classList = vue_1.computed(function () {
        return [
            // 输入框基础样式
            "qf-input",
            // 如果输入框禁用，则 添加禁用样式
            disabled ? "qf-input--disabled" : "",
            // 如果输入框获得焦点，则添加焦点样式
            isFocus.value ? "qf-input--focus" : "",
        ];
    });
    // 点击清空
    var onClose = function () {
        console.log("没触发111？？");
        // 点击关闭按钮是，清空输入框的值
        selfModel.value = "";
        console.log("没触发？？");
    };
    // 聚焦事件
    var onFocus = function () {
        // 输入框获得焦点时，更新焦点状态为true
        isFocus.value = true;
        // 触发 focus 事件 通知父组件输入框获取焦点
        emit("focus");
    };
    var onBlur = function () {
        // 输入框失去焦点 更新焦点状态为false
        isFocus.value = false;
        // 通知 父组件输入框失去焦点 触发 blur事件
        emit("blur");
    };
    return {
        selfModel: selfModel,
        classList: classList,
        onClose: onClose,
        onFocus: onFocus,
        onBlur: onBlur,
        closable: closable,
        disabled: disabled
    };
};
