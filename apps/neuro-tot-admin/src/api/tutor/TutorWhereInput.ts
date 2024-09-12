import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TutoringSessionListRelationFilter } from "../tutoringSession/TutoringSessionListRelationFilter";

export type TutorWhereInput = {
  bio?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  tutoringSessions?: TutoringSessionListRelationFilter;
};
