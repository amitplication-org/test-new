import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: number;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
