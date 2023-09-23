"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var qf_design_1 = require("qf-design");
var app_vue_1 = require("./app.vue");
var app = vue_1.createApp(app_vue_1["default"]);
app.use(qf_design_1["default"]);
app.mount("#app");
