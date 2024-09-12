import { TutoringSessionCreateNestedManyWithoutSubjectsInput } from "./TutoringSessionCreateNestedManyWithoutSubjectsInput";

export type SubjectCreateInput = {
  description?: string | null;
  name?: string | null;
  tutoringSessions?: TutoringSessionCreateNestedManyWithoutSubjectsInput;
};
