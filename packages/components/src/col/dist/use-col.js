"use strict";
exports.__esModule = true;
exports.useCol = void 0;
var vue_1 = require("vue");
var row_1 = require("../row/row");
exports.useCol = function (props) {
    var span = props.span, offset = props.offset;
    // 拿到row注入的上下文
    var gutter = vue_1.inject(row_1.rowContextKey, { gutter: vue_1.computed(function () { return 0; }) }).gutter;
    // 计算样式 列间隔值为多少
    var style = vue_1.computed(function () {
        var styles = {};
        if (gutter.value) {
            styles.paddingLeft = styles.paddingRight = gutter.value / 2 + "px";
        }
        return styles;
    });
    var classList = vue_1.computed(function () {
        return ['qf-col', "qf-col-" + span, "qf-col--offset-" + offset];
    });
    return {
        style: style,
        classList: classList
    };
};
