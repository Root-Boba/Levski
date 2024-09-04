import { LineupUpdateManyWithoutMatchesInput } from "./LineupUpdateManyWithoutMatchesInput";

export type MatchUpdateInput = {
  date?: Date | null;
  homeGround?: boolean | null;
  lineups?: LineupUpdateManyWithoutMatchesInput;
  opponent?: string | null;
};
