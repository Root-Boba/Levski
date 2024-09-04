import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type LineupUpdateInput = {
  match?: MatchWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
};
