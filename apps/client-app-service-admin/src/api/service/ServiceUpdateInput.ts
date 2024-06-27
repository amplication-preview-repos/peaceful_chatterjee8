import { ReviewUpdateManyWithoutServicesInput } from "./ReviewUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  description?: string | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutServicesInput;
  typeField?: "Option1" | null;
};
