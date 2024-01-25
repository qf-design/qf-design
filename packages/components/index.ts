import { App } from "vue";
import {
  Button,
  Tabs,
  Col,
  Row,
  Checkbox,
  Input,
  Card,
  Switch,
  Upload,
} from "./src";

const components = [
  Button,
  Tabs,
  Col,
  Row,
  Checkbox,
  Input,
  Card,
  Switch,
  Upload,
];

export default {
  install: (app: App) => {
    for (const c in components) {
      app.use((components as any)[c]);
    }
  },
};
