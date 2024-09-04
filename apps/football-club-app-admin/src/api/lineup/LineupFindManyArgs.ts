import { LineupWhereInput } from "./LineupWhereInput";
import { LineupOrderByInput } from "./LineupOrderByInput";

export type LineupFindManyArgs = {
  where?: LineupWhereInput;
  orderBy?: Array<LineupOrderByInput>;
  skip?: number;
  take?: number;
};
