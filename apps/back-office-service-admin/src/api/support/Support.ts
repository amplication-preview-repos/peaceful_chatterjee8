import { JsonValue } from "type-fest";

export type Support = {
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  tickets: JsonValue;
  updatedAt: Date;
};
