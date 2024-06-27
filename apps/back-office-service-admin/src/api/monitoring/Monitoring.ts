import { JsonValue } from "type-fest";

export type Monitoring = {
  createdAt: Date;
  currentServices: JsonValue;
  id: string;
  updatedAt: Date;
};
