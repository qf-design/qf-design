import { createApp } from "vue";
import qfDesign from "@qf/components";
// import qfDesign from 'qf-design-test';
import App from "./app.vue";

const app = createApp(App);
app.use(qfDesign);

app.mount("#app");
