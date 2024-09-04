import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  nationality?: SortOrder;
  numberField?: SortOrder;
  position?: SortOrder;
  updatedAt?: SortOrder;
};
