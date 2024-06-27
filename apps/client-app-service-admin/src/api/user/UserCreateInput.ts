import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  address?: string | null;
  contactDetails?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  phone?: string | null;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  socialMediaAccount?: string | null;
  username: string;
  vehicleDetails?: InputJsonValue;
};
