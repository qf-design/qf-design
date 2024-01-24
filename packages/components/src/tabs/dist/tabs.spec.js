"use strict";
exports.__esModule = true;
var vitest_1 = require("vitest");
var test_utils_1 = require("@vue/test-utils");
var tabs_vue_1 = require("./tabs.vue");
vitest_1.describe('Tabs 组件', function () {
    vitest_1.it('create', function () {
        var wrapper = test_utils_1.mount(tabs_vue_1["default"], {
            props: {
                data: [
                    {
                        label: 'tab1',
                        value: 1
                    }
                ]
            },
            width: 300
        });
        vitest_1.expect(wrapper.classes()).toContain('qf-tabs');
        vitest_1.expect(wrapper.text()).toContain('tab1');
    });
});
