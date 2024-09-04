import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type LineupCreateInput = {
  match?: MatchWhereUniqueInput | null;
  player?: PlayerWhereUniqueInput | null;
};
