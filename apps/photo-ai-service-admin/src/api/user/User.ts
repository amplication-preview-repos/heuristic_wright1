import { Photo } from "../photo/Photo";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  photos?: Array<Photo>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
