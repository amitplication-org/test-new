import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type CustomerWhereInput = {
  address?: AddressWhereUniqueInput;
  cnumber?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: IntFilter;
  lastName?: StringNullableFilter;
  onumber?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  phone?: StringNullableFilter;
};
