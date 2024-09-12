import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PatternWhereInput = {
  configField?: JsonFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
