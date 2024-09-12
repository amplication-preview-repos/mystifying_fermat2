import { UiElement as TUiElement } from "../api/uiElement/UiElement";

export const UIELEMENT_TITLE_FIELD = "typeField";

export const UiElementTitle = (record: TUiElement): string => {
  return record.typeField?.toString() || String(record.id);
};
