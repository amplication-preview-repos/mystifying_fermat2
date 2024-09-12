import { JsonValue } from "type-fest";

export type UiElement = {
  createdAt: Date;
  id: string;
  properties: JsonValue;
  style: JsonValue;
  typeField: string | null;
  updatedAt: Date;
};
