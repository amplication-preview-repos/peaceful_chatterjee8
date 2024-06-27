import { ServiceRequest as TServiceRequest } from "../api/serviceRequest/ServiceRequest";

export const SERVICEREQUEST_TITLE_FIELD = "provider";

export const ServiceRequestTitle = (record: TServiceRequest): string => {
  return record.provider?.toString() || String(record.id);
};
