import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  id: string;
  location: string | null;
  payments?: Array<Payment>;
  provider: string | null;
  schedule: Date | null;
  serviceType?: "Option1" | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
