import { UserManagement as TUserManagement } from "../api/userManagement/UserManagement";

export const USERMANAGEMENT_TITLE_FIELD = "user";

export const UserManagementTitle = (record: TUserManagement): string => {
  return record.user?.toString() || String(record.id);
};
