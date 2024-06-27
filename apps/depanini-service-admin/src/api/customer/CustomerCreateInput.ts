import { AppointmentCreateNestedManyWithoutCustomersInput } from "./AppointmentCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
};
