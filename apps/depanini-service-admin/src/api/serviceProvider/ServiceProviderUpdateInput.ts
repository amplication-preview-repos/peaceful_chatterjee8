import { InputJsonValue } from "../../types";

export type ServiceProviderUpdateInput = {
  email?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  servicesOffered?: InputJsonValue;
};
