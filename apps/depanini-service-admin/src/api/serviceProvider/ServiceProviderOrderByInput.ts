import { SortOrder } from "../../util/SortOrder";

export type ServiceProviderOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  servicesOffered?: SortOrder;
  updatedAt?: SortOrder;
};
