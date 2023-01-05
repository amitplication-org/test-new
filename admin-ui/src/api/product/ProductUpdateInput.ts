import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  anotherTest?: string | null;
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
