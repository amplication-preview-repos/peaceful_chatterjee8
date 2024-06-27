import { AppointmentUpdateManyWithoutServicesInput } from "./AppointmentUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutServicesInput;
  description?: string | null;
  duration?: number | null;
  name?: string | null;
  price?: number | null;
};
