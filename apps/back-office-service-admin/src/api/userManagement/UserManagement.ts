import { JsonValue } from "type-fest";

export type UserManagement = {
  actions: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user: string | null;
};
