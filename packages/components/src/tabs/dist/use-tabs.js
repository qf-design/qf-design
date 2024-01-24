"use strict";
exports.__esModule = true;
exports.useTabs = void 0;
var vue_1 = require("vue");
exports.useTabs = function (props, emit) {
    /**
     * 计算当前激活的tab index 如果没有activeKey 默认为0
     * 负责activeKey对应的index
     */
    var activeIndex = vue_1.computed(function () {
        if (!props.activeKey) {
            return 0;
        }
        var index = props.data.findIndex(function (item) { return item.value === props.activeKey; });
        return index;
    });
    var handleUpdate = function (value) {
        emit("update:activeKey", value);
    };
    return {
        activeIndex: activeIndex,
        handleUpdate: handleUpdate
    };
};
