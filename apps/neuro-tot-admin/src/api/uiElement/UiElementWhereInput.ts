import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UiElementWhereInput = {
  id?: StringFilter;
  properties?: JsonFilter;
  style?: JsonFilter;
  typeField?: StringNullableFilter;
};
