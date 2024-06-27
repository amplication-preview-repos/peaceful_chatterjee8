import { Review } from "../review/Review";

export type Service = {
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  reviews?: Array<Review>;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
