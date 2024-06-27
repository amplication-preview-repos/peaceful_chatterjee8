import { ReviewCreateNestedManyWithoutServicesInput } from "./ReviewCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  description?: string | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutServicesInput;
  typeField?: "Option1" | null;
};
