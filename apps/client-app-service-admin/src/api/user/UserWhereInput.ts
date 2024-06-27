import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  contactDetails?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  socialMediaAccount?: StringNullableFilter;
  username?: StringFilter;
  vehicleDetails?: JsonFilter;
};
