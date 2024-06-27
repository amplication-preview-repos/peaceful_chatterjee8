import { SortOrder } from "../../util/SortOrder";

export type ReportingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  reports?: SortOrder;
  updatedAt?: SortOrder;
};
