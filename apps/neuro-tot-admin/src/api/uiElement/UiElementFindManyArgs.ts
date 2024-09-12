import { UiElementWhereInput } from "./UiElementWhereInput";
import { UiElementOrderByInput } from "./UiElementOrderByInput";

export type UiElementFindManyArgs = {
  where?: UiElementWhereInput;
  orderBy?: Array<UiElementOrderByInput>;
  skip?: number;
  take?: number;
};
