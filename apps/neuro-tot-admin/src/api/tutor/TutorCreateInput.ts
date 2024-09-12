import { TutoringSessionCreateNestedManyWithoutTutorsInput } from "./TutoringSessionCreateNestedManyWithoutTutorsInput";

export type TutorCreateInput = {
  bio?: string | null;
  name?: string | null;
  tutoringSessions?: TutoringSessionCreateNestedManyWithoutTutorsInput;
};
