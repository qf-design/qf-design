"use strict";
exports.__esModule = true;
var src_1 = require("./src");
var components = [src_1.Button, src_1.Tabs];
exports["default"] = {
    install: function (app) {
        for (var c in components) {
            app.use(components[c]);
        }
    }
};
