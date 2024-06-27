import { InputJsonValue } from "../../types";

export type ServiceManagementUpdateInput = {
  service?: string | null;
  updates?: InputJsonValue;
};
