import { App } from "vue";
import { Button, Tabs, Col, Row, Checkbox, Input } from "./src";

const components = [Button, Tabs, Col, Row, Checkbox, Input];

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  },
};
