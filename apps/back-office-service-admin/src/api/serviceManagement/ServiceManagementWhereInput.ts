import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ServiceManagementWhereInput = {
  id?: StringFilter;
  service?: StringNullableFilter;
  updates?: JsonFilter;
};
