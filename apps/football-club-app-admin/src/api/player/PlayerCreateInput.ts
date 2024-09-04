import { LineupCreateNestedManyWithoutPlayersInput } from "./LineupCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  lineups?: LineupCreateNestedManyWithoutPlayersInput;
  name?: string | null;
  nationality?: string | null;
  numberField?: number | null;
  position?: "Option1" | null;
};
