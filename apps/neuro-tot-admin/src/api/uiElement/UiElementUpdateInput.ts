import { InputJsonValue } from "../../types";

export type UiElementUpdateInput = {
  properties?: InputJsonValue;
  style?: InputJsonValue;
  typeField?: string | null;
};
