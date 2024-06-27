import { Reporting as TReporting } from "../api/reporting/Reporting";

export const REPORTING_TITLE_FIELD = "id";

export const ReportingTitle = (record: TReporting): string => {
  return record.id?.toString() || String(record.id);
};
