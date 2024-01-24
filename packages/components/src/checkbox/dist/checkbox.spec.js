"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var vitest_1 = require("vitest");
var test_utils_1 = require("@vue/test-utils");
var checkbox_vue_1 = require("./checkbox.vue");
var checkbox_group_vue_1 = require("./checkbox-group.vue");
var vue_1 = require("vue");
vitest_1.describe('Checkbox 组件', function () {
    vitest_1.it('create', function () {
        var wrapper = test_utils_1.mount(checkbox_vue_1["default"]);
        vitest_1.expect(wrapper.classes()).toContain('qf-checkbox');
    });
    // 检查 checkbox v-model 是否正确更新了
    vitest_1.it('v-model', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(checkbox_vue_1["default"], {
                        props: {
                            modelValue: false,
                            // 每次状态改变同步状态的方法
                            'onUpdate:modelValue': function () {
                                // 手动同步
                                wrapper.setProps({ modelValue: true });
                            }
                        }
                    });
                    return [4 /*yield*/, wrapper.trigger('click')];
                case 1:
                    _a.sent();
                    vitest_1.expect(wrapper.props('modelValue')).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    // checkbox change事件是否触发了
    vitest_1.it('change event', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(checkbox_vue_1["default"], {
                        props: {
                            modelValue: false,
                            'onUpdate:modelValue': function () {
                                wrapper.setProps({ modelValue: true });
                            }
                        }
                    });
                    return [4 /*yield*/, wrapper.trigger('click')];
                case 1:
                    _a.sent();
                    vitest_1.expect(wrapper.emitted().change[0]).toEqual([true]);
                    return [2 /*return*/];
            }
        });
    }); });
    // 没有传入v-mode的时候，checkbox仍然可以进行xuanzhong
    vitest_1.it('without v-model', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(checkbox_vue_1["default"]);
                    /**
                     * 没有添加v-model
                     * 点击后，也需要选中选项
                     * 也就是model为true
                     * 直接拿组件示例看里面的状态是不是true
                     */
                    return [4 /*yield*/, wrapper.trigger('click')];
                case 1:
                    /**
                     * 没有添加v-model
                     * 点击后，也需要选中选项
                     * 也就是model为true
                     * 直接拿组件示例看里面的状态是不是true
                     */
                    _a.sent();
                    vitest_1.expect(wrapper.vm.model).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    // disabled的情况
    vitest_1.it('disabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(checkbox_vue_1["default"], {
                        props: {
                            disabled: true,
                            modelValue: false,
                            'onUpdate:modelValue': function () {
                                wrapper.setProps({ modelValue: true });
                            }
                        }
                    });
                    // 判断样式是否生效
                    vitest_1.expect(wrapper.classes()).toContain('qf-checkbox--disabled');
                    // 点击当前组件
                    return [4 /*yield*/, wrapper.trigger('click')
                        /**
                         * 禁用状态下
                         * 点击后状态不能发生改变
                         */
                    ];
                case 1:
                    // 点击当前组件
                    _a.sent();
                    /**
                     * 禁用状态下
                     * 点击后状态不能发生改变
                     */
                    vitest_1.expect(wrapper.props('modelValue')).toBe(false);
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('group', function () {
        // 渲染
        var wrapper = test_utils_1.mount(checkbox_group_vue_1["default"], {
            props: {
                modelValue: [],
                'onUpdate:modelValue': function (modelValue) {
                    wrapper.setProps({ modelValue: modelValue });
                }
            },
            // 通过插槽插入两个checkbox组件
            slots: {
                "default": [
                    vue_1.h(checkbox_vue_1["default"], {
                        label: 'checkbox1'
                    }),
                    vue_1.h(checkbox_vue_1["default"], {
                        label: 'checkbox2'
                    })
                ]
            }
        });
        // 此时通过getComponent获取到第一个组件，触发点击事件
        wrapper.getComponent(checkbox_vue_1["default"]).trigger('click');
        // 期望此时 checkbox-group v-model的值应该为 第一个组件的label
        vitest_1.expect(wrapper.props('modelValue')).toEqual(['checkbox1']);
    });
});
