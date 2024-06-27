import { AppointmentCreateNestedManyWithoutServicesInput } from "./AppointmentCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutServicesInput;
  description?: string | null;
  duration?: number | null;
  name?: string | null;
  price?: number | null;
};
