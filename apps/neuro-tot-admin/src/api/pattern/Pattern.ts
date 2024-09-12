import { JsonValue } from "type-fest";

export type Pattern = {
  configField: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
