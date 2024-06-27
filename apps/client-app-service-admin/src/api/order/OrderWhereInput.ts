import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  provider?: StringNullableFilter;
  schedule?: DateTimeNullableFilter;
  serviceType?: "Option1";
  status?: "Option1";
};
