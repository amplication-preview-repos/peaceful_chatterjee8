import { InputJsonValue } from "../../types";

export type ServiceProviderCreateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  servicesOffered?: InputJsonValue;
};
