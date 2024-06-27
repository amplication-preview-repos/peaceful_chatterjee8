import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  address?: string | null;
  contactDetails?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  phone?: string | null;
  reviews?: ReviewUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  socialMediaAccount?: string | null;
  username?: string;
  vehicleDetails?: InputJsonValue;
};
