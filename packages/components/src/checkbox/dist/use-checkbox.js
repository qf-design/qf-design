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
exports.useCheckbox = void 0;
var vue_1 = require("vue");
var checkbox_1 = require("./checkbox");
exports.useCheckbox = function (props, emit) {
    // 通过inject获取checkbox-group注入的上下文
    var checkboxContext = vue_1.inject(checkbox_1.checkboxContextKey, undefined);
    // 判断当前checkbox 是否为group模式
    var isGroup = vue_1.computed(function () { return checkboxContext !== undefined; });
    // 内部的model变量，处理外部没有传入v-model的情况
    var selfModel = vue_1.ref(false);
    // 计算属性 model，拆分为get和set
    var model = vue_1.computed({
        get: function () {
            var _a, _b;
            // 组模式下， 返回组的值
            if (isGroup.value) {
                return (_a = checkboxContext === null || checkboxContext === void 0 ? void 0 : checkboxContext.modelValue) === null || _a === void 0 ? void 0 : _a.value;
            }
            // 非组模式下，先返回传入的v-model的值，若为undefined, 也就是没有传入v-model, 则使用内部值
            return (_b = props.modelValue) !== null && _b !== void 0 ? _b : selfModel.value;
        },
        set: function (val) {
            // 组模式下，需要将值触发到checkbox-group的change事件，
            // checkbox-group.changeHandler触发后会保存该值, 用于后续checkbox选中状态判断
            if (isGroup.value) {
                checkboxContext === null || checkboxContext === void 0 ? void 0 : checkboxContext.changeHandler(props.label);
            }
            else {
                // 非组模式下，只需要更新v-model和自身内部的model变量即可
                emit('update:modelValue', val);
                selfModel.value = val;
            }
        }
    });
    // 判断是否禁用
    var isDisabled = vue_1.computed(function () { return props.disabled; });
    // 判断是否选中
    var isChecked = vue_1.computed(function () {
        // 组模式
        // model.value为checkbox-group的属性, 判断checkbox.label是否在model.value内
        if (isGroup.value && Array.isArray(model.value)) {
            return model.value.includes(props.label);
        }
        else {
            // 非组模式 返回当前model的值即可
            return model.value;
        }
    });
    // 根据不同的情况，返回不同的className
    var classList = vue_1.computed(function () {
        return [
            'qf-checkbox',
            props.disabled ? "qf-checkbox--disabled" : '',
            isChecked.value ? "qf-checkbox--checked" : ''
        ];
    });
    // 更新函数
    var handleUpdate = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // 禁用情况下，直接不让更新
                    if (isDisabled.value)
                        return [2 /*return*/];
                    model.value = !model.value;
                    // 通过nextTick, 防止触发change事件时，model的值还未更新
                    return [4 /*yield*/, vue_1.nextTick()];
                case 1:
                    // 通过nextTick, 防止触发change事件时，model的值还未更新
                    _a.sent();
                    emit('change', model.value);
                    return [2 /*return*/];
            }
        });
    }); };
    return {
        classList: classList,
        handleUpdate: handleUpdate,
        model: model
    };
};
