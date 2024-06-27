import { MonitoringWhereInput } from "./MonitoringWhereInput";
import { MonitoringOrderByInput } from "./MonitoringOrderByInput";

export type MonitoringFindManyArgs = {
  where?: MonitoringWhereInput;
  orderBy?: Array<MonitoringOrderByInput>;
  skip?: number;
  take?: number;
};
