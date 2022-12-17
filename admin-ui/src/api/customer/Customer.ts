import { Address } from "../address/Address";
import { Order } from "../order/Order";

export type Customer = {
  address?: Address | null;
  cnumber: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: number;
  lastName: string | null;
  onumber: string | null;
  orders?: Array<Order>;
  phone: string | null;
  updatedAt: Date;
};
