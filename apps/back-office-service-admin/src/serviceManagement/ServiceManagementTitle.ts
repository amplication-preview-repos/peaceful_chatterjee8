import { ServiceManagement as TServiceManagement } from "../api/serviceManagement/ServiceManagement";

export const SERVICEMANAGEMENT_TITLE_FIELD = "service";

export const ServiceManagementTitle = (record: TServiceManagement): string => {
  return record.service?.toString() || String(record.id);
};
