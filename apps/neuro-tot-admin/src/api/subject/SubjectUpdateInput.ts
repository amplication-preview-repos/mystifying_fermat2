import { TutoringSessionUpdateManyWithoutSubjectsInput } from "./TutoringSessionUpdateManyWithoutSubjectsInput";

export type SubjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  tutoringSessions?: TutoringSessionUpdateManyWithoutSubjectsInput;
};
