import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ServiceRequestWhereInput = {
  id?: StringFilter;
  provider?: StringNullableFilter;
  requestDetails?: JsonFilter;
  status?: "Option1";
};
