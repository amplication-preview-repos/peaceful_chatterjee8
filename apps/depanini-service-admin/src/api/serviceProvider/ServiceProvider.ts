import { JsonValue } from "type-fest";

export type ServiceProvider = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  servicesOffered: JsonValue;
  updatedAt: Date;
};
