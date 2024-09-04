import { LineupCreateNestedManyWithoutMatchesInput } from "./LineupCreateNestedManyWithoutMatchesInput";

export type MatchCreateInput = {
  date?: Date | null;
  homeGround?: boolean | null;
  lineups?: LineupCreateNestedManyWithoutMatchesInput;
  opponent?: string | null;
};
