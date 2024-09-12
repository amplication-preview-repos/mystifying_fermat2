import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubjectWhereUniqueInput } from "../subject/SubjectWhereUniqueInput";
import { TutorWhereUniqueInput } from "../tutor/TutorWhereUniqueInput";

export type TutoringSessionWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  startTime?: DateTimeNullableFilter;
  status?: "Option1";
  subject?: SubjectWhereUniqueInput;
  tutor?: TutorWhereUniqueInput;
};
