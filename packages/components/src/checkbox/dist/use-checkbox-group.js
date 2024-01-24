"use strict";
exports.__esModule = true;
exports.useCheckboxGroup = void 0;
var vue_1 = require("vue");
var checkbox_1 = require("./checkbox");
exports.useCheckboxGroup = function (props, emit, model) {
    // 这里定义change事件，
    // 当使用checkbox-group包住checkbox时，checkbox的值变化会触发该事件
    var changeHandler = function (val) {
        var modelValue = model.value;
        var index = modelValue.findIndex(function (v) { return v === val; });
        // 选中时，将checkbox的label 更新给 v-model
        if (index === -1) {
            modelValue.push(val);
        }
        else {
            // 处理取消选中情况，将checkbox移除
            modelValue.splice(index, 1);
        }
        // 更新v-model的值，同时触发change事件
        model.value = modelValue;
        emit('change', model.value);
    };
    // 通过provide，进行下发
    // 包括当前选中的值数组、change回调
    vue_1.provide(checkbox_1.checkboxContextKey, {
        modelValue: model,
        changeHandler: changeHandler
    });
    var classList = vue_1.computed(function () { return ['qf-checkbox-group']; });
    return {
        classList: classList
    };
};
