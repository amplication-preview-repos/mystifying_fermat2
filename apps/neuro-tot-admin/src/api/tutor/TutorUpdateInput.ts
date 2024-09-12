import { TutoringSessionUpdateManyWithoutTutorsInput } from "./TutoringSessionUpdateManyWithoutTutorsInput";

export type TutorUpdateInput = {
  bio?: string | null;
  name?: string | null;
  tutoringSessions?: TutoringSessionUpdateManyWithoutTutorsInput;
};
