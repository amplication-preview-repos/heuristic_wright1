import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoWhereInput = {
  generatedPhoto?: JsonFilter;
  id?: StringFilter;
  originalPhoto?: JsonFilter;
  referencePhoto?: JsonFilter;
  style?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
