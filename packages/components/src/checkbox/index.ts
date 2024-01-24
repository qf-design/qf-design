import { withInstall } from "./../../utils";
import _Checkbox from "./checkbox.vue";
import _CheckboxGroup from "./checkbox-group.vue";

export const Checkbox = withInstall(_Checkbox, {
  CheckboxGroup: _CheckboxGroup,
});
export default Checkbox;
