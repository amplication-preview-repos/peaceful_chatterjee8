import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  location?: string | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  provider?: string | null;
  schedule?: Date | null;
  serviceType?: "Option1" | null;
  status?: "Option1" | null;
};
