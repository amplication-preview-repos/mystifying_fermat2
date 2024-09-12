import { TutoringSession } from "../tutoringSession/TutoringSession";

export type Tutor = {
  bio: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  tutoringSessions?: Array<TutoringSession>;
  updatedAt: Date;
};
