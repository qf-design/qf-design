"use strict";
exports.__esModule = true;
exports.useSwitch = void 0;
var vue_1 = require("vue");
// 使用Switch的自定义hook
exports.useSwitch = function (props, // Switch组件的props
emit, // 用于触发change事件的函数
model // 用于存储开关状态的引用
) {
    var disabled = props.disabled, loading = props.loading, activeText = props.activeText, inactiveText = props.inactiveText; // 从props中解构需要的属性
    var selfModel = vue_1.ref(props.modelValue); // 使用ref创建一个自身的model
    // 监听selfModel的变化
    vue_1.watch(selfModel, function (val) {
        model.value = val; // 更新model的值
        emit('change'); // 触发change事件
    });
    // 计算class列表
    var classList = vue_1.computed(function () {
        return [
            'qf-switch',
            disabled ? 'qf-switch--disabled' : '',
            loading ? 'qf-switch--loading' : '',
            selfModel.value ? 'qf-switch--checked' : ''
        ];
    });
    // 计算是否禁用
    var isDisabled = vue_1.computed(function () { return disabled || loading; });
    return {
        selfModel: selfModel,
        isDisabled: isDisabled,
        activeText: activeText,
        inactiveText: inactiveText,
        classList: classList,
        loading: loading // 是否加载中
    };
};
