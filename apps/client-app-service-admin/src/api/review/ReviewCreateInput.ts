import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  service?: ServiceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
