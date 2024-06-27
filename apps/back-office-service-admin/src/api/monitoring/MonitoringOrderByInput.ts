import { SortOrder } from "../../util/SortOrder";

export type MonitoringOrderByInput = {
  createdAt?: SortOrder;
  currentServices?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
