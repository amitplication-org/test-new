import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  cnumber?: string | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  onumber?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
  phone?: string | null;
};
