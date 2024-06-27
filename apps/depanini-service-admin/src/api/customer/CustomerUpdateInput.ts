import { AppointmentUpdateManyWithoutCustomersInput } from "./AppointmentUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
