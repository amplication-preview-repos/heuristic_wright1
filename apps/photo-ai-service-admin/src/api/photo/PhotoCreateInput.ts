import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PhotoCreateInput = {
  generatedPhoto?: InputJsonValue;
  originalPhoto?: InputJsonValue;
  referencePhoto?: InputJsonValue;
  style?: string | null;
  user?: UserWhereUniqueInput | null;
};
