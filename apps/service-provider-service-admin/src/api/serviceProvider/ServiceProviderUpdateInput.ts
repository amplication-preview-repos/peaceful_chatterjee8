import { InputJsonValue } from "../../types";

export type ServiceProviderUpdateInput = {
  availability?: string | null;
  certifications?: InputJsonValue;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  socialMediaAccount?: string | null;
};
