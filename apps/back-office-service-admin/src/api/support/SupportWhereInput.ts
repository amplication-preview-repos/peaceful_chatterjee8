import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type SupportWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  tickets?: JsonFilter;
};
