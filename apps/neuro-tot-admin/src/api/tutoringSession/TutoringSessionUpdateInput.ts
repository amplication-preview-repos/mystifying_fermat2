import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type TutoringSessionUpdateInput = {
  endTime?: Date | null;
  startTime?: Date | null;
  status?: "Option1" | null;
  subject?: SubjectWhereUniqueInput | null;
  tutor?: TutorWhereUniqueInput | null;
};
