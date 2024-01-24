"use strict";
exports.__esModule = true;
var test_utils_1 = require("@vue/test-utils");
var vitest_1 = require("vitest");
var col_vue_1 = require("./col.vue");
vitest_1.describe('Col 组件', function () {
    vitest_1.it('create', function () {
        var wrapper = test_utils_1.mount(col_vue_1["default"]);
        vitest_1.expect(wrapper.classes()).toContain('qf-col');
    });
});
