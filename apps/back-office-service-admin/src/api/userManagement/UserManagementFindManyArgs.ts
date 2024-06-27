import { UserManagementWhereInput } from "./UserManagementWhereInput";
import { UserManagementOrderByInput } from "./UserManagementOrderByInput";

export type UserManagementFindManyArgs = {
  where?: UserManagementWhereInput;
  orderBy?: Array<UserManagementOrderByInput>;
  skip?: number;
  take?: number;
};
