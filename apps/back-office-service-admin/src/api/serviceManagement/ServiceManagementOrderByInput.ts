import { SortOrder } from "../../util/SortOrder";

export type ServiceManagementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  service?: SortOrder;
  updatedAt?: SortOrder;
  updates?: SortOrder;
};
