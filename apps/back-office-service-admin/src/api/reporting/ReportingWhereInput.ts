import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ReportingWhereInput = {
  id?: StringFilter;
  reports?: JsonFilter;
};
