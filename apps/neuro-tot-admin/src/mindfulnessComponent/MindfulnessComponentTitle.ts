import { MindfulnessComponent as TMindfulnessComponent } from "../api/mindfulnessComponent/MindfulnessComponent";

export const MINDFULNESSCOMPONENT_TITLE_FIELD = "typeField";

export const MindfulnessComponentTitle = (
  record: TMindfulnessComponent
): string => {
  return record.typeField?.toString() || String(record.id);
};
