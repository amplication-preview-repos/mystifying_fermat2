import { TutoringSession } from "../tutoringSession/TutoringSession";

export type Subject = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  tutoringSessions?: Array<TutoringSession>;
  updatedAt: Date;
};
