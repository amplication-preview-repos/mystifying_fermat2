import { SortOrder } from "../../util/SortOrder";

export type TutoringSessionOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  startTime?: SortOrder;
  status?: SortOrder;
  subjectId?: SortOrder;
  tutorId?: SortOrder;
  updatedAt?: SortOrder;
};
