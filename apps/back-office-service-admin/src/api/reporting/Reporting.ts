import { JsonValue } from "type-fest";

export type Reporting = {
  createdAt: Date;
  id: string;
  reports: JsonValue;
  updatedAt: Date;
};
