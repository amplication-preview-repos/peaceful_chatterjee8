import { Appointment as TAppointment } from "../api/appointment/Appointment";

export const APPOINTMENT_TITLE_FIELD = "status";

export const AppointmentTitle = (record: TAppointment): string => {
  return record.status?.toString() || String(record.id);
};
