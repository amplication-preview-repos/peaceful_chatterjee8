import { SortOrder } from "../../util/SortOrder";

export type SupportOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  tickets?: SortOrder;
  updatedAt?: SortOrder;
};
