import { CustomerType as TCustomerType } from "../api/customerType/CustomerType";

export const CUSTOMERTYPE_TITLE_FIELD = "name";

export const CustomerTypeTitle = (record: TCustomerType): string => {
  return record.name || String(record.id);
};
