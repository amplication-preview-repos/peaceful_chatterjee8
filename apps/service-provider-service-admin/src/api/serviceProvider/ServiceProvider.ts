import { JsonValue } from "type-fest";

export type ServiceProvider = {
  availability: string | null;
  certifications: JsonValue;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  socialMediaAccount: string | null;
  updatedAt: Date;
};
