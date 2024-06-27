import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ServiceWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  typeField?: "Option1";
};
