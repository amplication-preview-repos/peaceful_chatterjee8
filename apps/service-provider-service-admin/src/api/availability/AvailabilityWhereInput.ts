import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AvailabilityWhereInput = {
  date?: DateTimeNullableFilter;
  end?: DateTimeNullableFilter;
  id?: StringFilter;
  provider?: StringNullableFilter;
  start?: DateTimeNullableFilter;
};
