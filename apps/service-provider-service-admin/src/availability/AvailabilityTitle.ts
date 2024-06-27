import { Availability as TAvailability } from "../api/availability/Availability";

export const AVAILABILITY_TITLE_FIELD = "provider";

export const AvailabilityTitle = (record: TAvailability): string => {
  return record.provider?.toString() || String(record.id);
};
