import { Order } from "../order/Order";

export type Product = {
  anotherTest: string | null;
  createdAt: Date;
  description: string | null;
  id: number;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
