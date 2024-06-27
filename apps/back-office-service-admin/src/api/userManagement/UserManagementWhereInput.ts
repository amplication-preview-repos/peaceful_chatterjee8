import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserManagementWhereInput = {
  actions?: JsonFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
};
