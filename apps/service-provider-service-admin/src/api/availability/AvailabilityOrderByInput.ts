import { SortOrder } from "../../util/SortOrder";

export type AvailabilityOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  end?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  start?: SortOrder;
  updatedAt?: SortOrder;
};
