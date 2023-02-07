import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CustomerTypeWhereInput = {
  customers?: CustomerWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
