import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerTypeCreateInput = {
  customers?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
