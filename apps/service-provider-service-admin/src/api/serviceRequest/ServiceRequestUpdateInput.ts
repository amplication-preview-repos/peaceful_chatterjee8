import { InputJsonValue } from "../../types";

export type ServiceRequestUpdateInput = {
  provider?: string | null;
  requestDetails?: InputJsonValue;
  status?: "Option1" | null;
};
