import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  service?: ServiceWhereUniqueInput;
  serviceDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};
