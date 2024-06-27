import { ServiceManagementWhereInput } from "./ServiceManagementWhereInput";
import { ServiceManagementOrderByInput } from "./ServiceManagementOrderByInput";

export type ServiceManagementFindManyArgs = {
  where?: ServiceManagementWhereInput;
  orderBy?: Array<ServiceManagementOrderByInput>;
  skip?: number;
  take?: number;
};
