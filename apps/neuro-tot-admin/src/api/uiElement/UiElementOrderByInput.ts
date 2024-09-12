import { SortOrder } from "../../util/SortOrder";

export type UiElementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  properties?: SortOrder;
  style?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
