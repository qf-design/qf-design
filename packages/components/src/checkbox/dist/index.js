"use strict";
exports.__esModule = true;
exports.Checkbox = void 0;
var utils_1 = require("./../../utils");
var checkbox_vue_1 = require("./checkbox.vue");
var checkbox_group_vue_1 = require("./checkbox-group.vue");
exports.Checkbox = utils_1.withInstall(checkbox_vue_1["default"], {
    CheckboxGroup: checkbox_group_vue_1["default"]
});
exports["default"] = exports.Checkbox;
