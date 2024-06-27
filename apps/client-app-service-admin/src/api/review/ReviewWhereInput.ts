import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  service?: ServiceWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
