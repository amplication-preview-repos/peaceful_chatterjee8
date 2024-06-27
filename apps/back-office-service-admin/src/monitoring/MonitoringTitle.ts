import { Monitoring as TMonitoring } from "../api/monitoring/Monitoring";

export const MONITORING_TITLE_FIELD = "id";

export const MonitoringTitle = (record: TMonitoring): string => {
  return record.id?.toString() || String(record.id);
};
