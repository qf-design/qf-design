import { createApp } from "vue";
import qfDesign from 'qf-design';
import App from "./app.vue";

const app = createApp(App);
app.use(qfDesign);

app.mount("#app");
