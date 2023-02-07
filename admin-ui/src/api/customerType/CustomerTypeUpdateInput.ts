import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerTypeUpdateInput = {
  customers?: CustomerWhereUniqueInput | null;
  name?: string | null;
};
