import { Service } from "../service/Service";
import { User } from "../user/User";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  service?: Service | null;
  updatedAt: Date;
  user?: User | null;
};
