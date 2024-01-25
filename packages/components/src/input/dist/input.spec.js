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
var _1 = require(".");
vitest_1.describe('Input 组件', function () {
    vitest_1.it('v-model', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(_1["default"], {
                        props: {
                            modelValue: '123',
                            'onUpdate:modelValue': function (val) {
                                wrapper.setProps({
                                    modelValue: val
                                });
                            }
                        }
                    });
                    // 是否创建成功
                    vitest_1.expect(wrapper.classes()).toContain('qf-input');
                    // 找到Input 并修改值为456
                    return [4 /*yield*/, wrapper.find('input').setValue('456')
                        // 判断modelValue的值是不是456
                    ];
                case 1:
                    // 找到Input 并修改值为456
                    _a.sent();
                    // 判断modelValue的值是不是456
                    vitest_1.expect(wrapper.props('modelValue')).toBe('456');
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('without v-model', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(_1["default"]);
                    vitest_1.expect(wrapper.classes()).toContain('qf-input');
                    return [4 /*yield*/, wrapper.find('input').setValue('456')];
                case 1:
                    _a.sent();
                    vitest_1.expect(wrapper.emitted().change[0]).toEqual(['456']);
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('disabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(_1["default"], {
                        props: {
                            disabled: true
                        }
                    });
                    // 判断是否创建成功
                    vitest_1.expect(wrapper.classes()).toContain('qf-input');
                    // 修改input的值
                    return [4 /*yield*/, wrapper.find('input').setValue('456')
                        // 不能触发change事件
                    ];
                case 1:
                    // 修改input的值
                    _a.sent();
                    // 不能触发change事件
                    vitest_1.expect(wrapper.emitted().change).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
    vitest_1.it('closeable', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(_1["default"], {
                        props: {
                            modelValue: '123',
                            closable: true
                        },
                        attachTo: document.body
                    });
                    // 聚焦
                    return [4 /*yield*/, wrapper.find('input').trigger('focus')
                        // 聚焦后清空按钮是否显示
                    ];
                case 1:
                    // 聚焦
                    _a.sent();
                    // 聚焦后清空按钮是否显示
                    vitest_1.expect(wrapper.get('.qf-input__close').isVisible()).toBe(true);
                    // 点击
                    return [4 /*yield*/, wrapper.get('.qf-input__close').trigger('click')
                        // 点击清空后双向绑定的值是否还存在
                    ];
                case 2:
                    // 点击
                    _a.sent();
                    // 点击清空后双向绑定的值是否还存在
                    vitest_1.expect(wrapper.find('input').element.value).toBe('');
                    return [2 /*return*/];
            }
        });
    }); });
});
