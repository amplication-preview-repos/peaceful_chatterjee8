import { SortOrder } from "../../util/SortOrder";

export type ServiceProviderOrderByInput = {
  availability?: SortOrder;
  certifications?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  socialMediaAccount?: SortOrder;
  updatedAt?: SortOrder;
};
