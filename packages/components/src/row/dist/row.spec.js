"use strict";
exports.__esModule = true;
var test_utils_1 = require("@vue/test-utils");
var vitest_1 = require("vitest");
var row_vue_1 = require("./row.vue");
vitest_1.describe('Row 组件', function () {
    vitest_1.it('create', function () {
        var wrapper = test_utils_1.mount(row_vue_1["default"]);
        vitest_1.expect(wrapper.classes()).toContain('qf-row');
    });
    vitest_1.it('gutter', function () {
        var wrapper = test_utils_1.mount(row_vue_1["default"], {
            props: {
                gutter: 10
            }
        });
        vitest_1.expect(wrapper.attributes('style')).toBe('margin-left: -5px; margin-right: -5px;');
    });
});
