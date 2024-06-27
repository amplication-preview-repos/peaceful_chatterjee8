import { Customer } from "../customer/Customer";
import { Service } from "../service/Service";

export type Appointment = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  service?: Service | null;
  serviceDate: Date | null;
  status: string | null;
  updatedAt: Date;
};
