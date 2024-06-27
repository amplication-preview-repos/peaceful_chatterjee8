import { JsonValue } from "type-fest";

export type ServiceManagement = {
  createdAt: Date;
  id: string;
  service: string | null;
  updatedAt: Date;
  updates: JsonValue;
};
