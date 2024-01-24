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
var test_utils_1 = require("@vue/test-utils");
var vitest_1 = require("vitest");
var button_vue_1 = require("./button.vue");
vitest_1.describe('Button组件', function () {
    // 组件是否创建成功
    vitest_1.it('create', function () {
        var wrapper = test_utils_1.mount(button_vue_1["default"]);
        vitest_1.expect(wrapper.classes()).toContain('qf-button');
    });
    // 按钮组件的type属性是否生效
    vitest_1.it('type', function () {
        /**
         * 本质上来我们的按钮类型是通过css显示
         * 那么我们就可以判断当前按钮里有没有对应的css
         */
        var types = ['success', 'primary', 'warning', 'danger', 'info'];
        types.forEach(function (item) {
            /**
             * 有多少种类型我们就需要创建多少个组件
             */
            var wrapper = test_utils_1.mount(button_vue_1["default"], {
                props: {
                    type: item
                }
            });
            vitest_1.expect(wrapper.classes()).toContain("qf-button--" + item);
        });
    });
    // 按钮组件的disabled属性是否生效
    vitest_1.it('disabled', function () { return __awaiter(void 0, void 0, void 0, function () {
        var wrapper;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    wrapper = test_utils_1.mount(button_vue_1["default"], {
                        props: {
                            disabled: true
                        }
                    });
                    /**
                     * 当前按钮样式是否是disable的样式
                     */
                    vitest_1.expect(wrapper.classes()).toContain('qf-button--disabled');
                    /**
                     * 当前按钮是否还能点击
                     */
                    return [4 /*yield*/, wrapper.trigger('click')];
                case 1:
                    /**
                     * 当前按钮是否还能点击
                     */
                    _a.sent();
                    vitest_1.expect(wrapper.emitted('click')).toBeUndefined();
                    return [2 /*return*/];
            }
        });
    }); });
});
