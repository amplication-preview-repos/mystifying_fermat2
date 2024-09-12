import { TutoringSession as TTutoringSession } from "../api/tutoringSession/TutoringSession";

export const TUTORINGSESSION_TITLE_FIELD = "id";

export const TutoringSessionTitle = (record: TTutoringSession): string => {
  return record.id?.toString() || String(record.id);
};
