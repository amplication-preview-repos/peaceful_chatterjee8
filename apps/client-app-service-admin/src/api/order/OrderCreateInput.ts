import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  location?: string | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  provider?: string | null;
  schedule?: Date | null;
  serviceType?: "Option1" | null;
  status?: "Option1" | null;
};
