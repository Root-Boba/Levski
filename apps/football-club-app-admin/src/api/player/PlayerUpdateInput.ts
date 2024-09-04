import { LineupUpdateManyWithoutPlayersInput } from "./LineupUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  lineups?: LineupUpdateManyWithoutPlayersInput;
  name?: string | null;
  nationality?: string | null;
  numberField?: number | null;
  position?: "Option1" | null;
};
