import { Appointment } from "../appointment/Appointment";

export type Service = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  description: string | null;
  duration: number | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
};
