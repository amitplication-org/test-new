import { CustomerTypeWhereInput } from "./CustomerTypeWhereInput";
import { CustomerTypeOrderByInput } from "./CustomerTypeOrderByInput";

export type CustomerTypeFindManyArgs = {
  where?: CustomerTypeWhereInput;
  orderBy?: Array<CustomerTypeOrderByInput>;
  skip?: number;
  take?: number;
};
