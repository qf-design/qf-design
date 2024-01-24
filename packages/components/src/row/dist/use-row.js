"use strict";
exports.__esModule = true;
exports.useRow = void 0;
var row_1 = require("./row");
var vue_1 = require("vue");
exports.useRow = function (props) {
    var justify = props.justify, align = props.align;
    var gutter = vue_1.computed(function () { var _a; return (_a = props.gutter) !== null && _a !== void 0 ? _a : 0; });
    // 将gutter通过provide注入，提供给col组件
    vue_1.provide(row_1.rowContextKey, { gutter: gutter });
    // 根据gutter计算样式
    var style = vue_1.computed(function () {
        var styles = {};
        if (!props.gutter) {
            return styles;
        }
        styles.marginRight = styles.marginLeft = "-" + gutter.value / 2 + "px";
        return styles;
    });
    var classList = vue_1.computed(function () { return [
        'qf-row',
        justify !== 'start' ? "qf-rows--justify-" + justify : '',
        align ? "qf-rows-align-" + align : ''
    ]; });
    return {
        style: style,
        classList: classList
    };
};
