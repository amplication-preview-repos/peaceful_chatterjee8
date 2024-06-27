import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  serviceId?: SortOrder;
  serviceDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
