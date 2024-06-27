import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type AppointmentUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
  serviceDate?: Date | null;
  status?: string | null;
};
