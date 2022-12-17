import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AddressWhereInput = {
  address_1?: StringNullableFilter;
  address_2?: StringNullableFilter;
  anumber?: StringNullableFilter;
  city?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  id?: IntFilter;
  state?: StringNullableFilter;
  zip?: IntNullableFilter;
};
