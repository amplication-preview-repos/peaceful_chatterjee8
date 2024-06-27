import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  address?: SortOrder;
  contactDetails?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  phone?: SortOrder;
  roles?: SortOrder;
  socialMediaAccount?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  vehicleDetails?: SortOrder;
};
