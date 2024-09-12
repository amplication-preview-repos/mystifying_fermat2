import { Subject } from "../subject/Subject";
import { Tutor } from "../tutor/Tutor";

export type TutoringSession = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  startTime: Date | null;
  status?: "Option1" | null;
  subject?: Subject | null;
  tutor?: Tutor | null;
  updatedAt: Date;
};
