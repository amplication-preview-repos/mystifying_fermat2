import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TutoringSessionListRelationFilter } from "../tutoringSession/TutoringSessionListRelationFilter";

export type SubjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tutoringSessions?: TutoringSessionListRelationFilter;
};
