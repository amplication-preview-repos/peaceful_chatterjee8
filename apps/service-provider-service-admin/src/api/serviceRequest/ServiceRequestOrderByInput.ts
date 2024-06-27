import { SortOrder } from "../../util/SortOrder";

export type ServiceRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  requestDetails?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
