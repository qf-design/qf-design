"use strict";
exports.__esModule = true;
exports.useCard = void 0;
var vue_1 = require("vue");
exports.useCard = function (props) {
    var classList = vue_1.computed(function () {
        return [
            'qf-card',
            props.shadowType === 'never' ? 'qf-card--never' : '',
            props.shadowType === 'hover' ? 'qf-card--hover' : ''
        ];
    });
    return {
        classList: classList
    };
};
