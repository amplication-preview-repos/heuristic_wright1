import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  createdAt?: SortOrder;
  generatedPhoto?: SortOrder;
  id?: SortOrder;
  originalPhoto?: SortOrder;
  referencePhoto?: SortOrder;
  style?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
