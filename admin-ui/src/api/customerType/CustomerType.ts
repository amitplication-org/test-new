import { Customer } from "../customer/Customer";

export type CustomerType = {
  createdAt: Date;
  customers?: Customer | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
