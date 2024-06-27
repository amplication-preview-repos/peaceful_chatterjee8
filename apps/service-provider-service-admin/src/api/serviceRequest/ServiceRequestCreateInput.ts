import { InputJsonValue } from "../../types";

export type ServiceRequestCreateInput = {
  provider?: string | null;
  requestDetails?: InputJsonValue;
  status?: "Option1" | null;
};
