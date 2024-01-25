"use strict";
exports.__esModule = true;
var src_1 = require("./src");
var components = [src_1.Button, src_1.Tabs, src_1.Col, src_1.Row, src_1.Checkbox, src_1.Input, src_1.Card, src_1.Switch, src_1.Upload];
exports["default"] = {
    install: function (app) {
        for (var c in components) {
            app.use(components[c]);
        }
    }
};
