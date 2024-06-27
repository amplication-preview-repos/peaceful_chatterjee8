import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type MonitoringWhereInput = {
  currentServices?: JsonFilter;
  id?: StringFilter;
};
