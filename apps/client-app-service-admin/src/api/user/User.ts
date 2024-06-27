import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  address: string | null;
  contactDetails: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  reviews?: Array<Review>;
  roles: JsonValue;
  socialMediaAccount: string | null;
  updatedAt: Date;
  username: string;
  vehicleDetails: JsonValue;
};
