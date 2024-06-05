import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Photo = {
  createdAt: Date;
  generatedPhoto: JsonValue;
  id: string;
  originalPhoto: JsonValue;
  referencePhoto: JsonValue;
  style: string | null;
  updatedAt: Date;
  user?: User | null;
};
