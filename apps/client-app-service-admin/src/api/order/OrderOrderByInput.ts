import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  provider?: SortOrder;
  schedule?: SortOrder;
  serviceType?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
