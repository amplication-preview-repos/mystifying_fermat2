import { JsonValue } from "type-fest";

export type MindfulnessComponent = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
