import { JsonValue } from "type-fest";

export type ServiceRequest = {
  createdAt: Date;
  id: string;
  provider: string | null;
  requestDetails: JsonValue;
  status?: "Option1" | null;
  updatedAt: Date;
};
