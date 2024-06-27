import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ServiceProviderWhereInput = {
  availability?: StringNullableFilter;
  certifications?: JsonFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
  socialMediaAccount?: StringNullableFilter;
};
