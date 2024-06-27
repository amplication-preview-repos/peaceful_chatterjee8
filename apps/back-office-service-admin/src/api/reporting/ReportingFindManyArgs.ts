import { ReportingWhereInput } from "./ReportingWhereInput";
import { ReportingOrderByInput } from "./ReportingOrderByInput";

export type ReportingFindManyArgs = {
  where?: ReportingWhereInput;
  orderBy?: Array<ReportingOrderByInput>;
  skip?: number;
  take?: number;
};
