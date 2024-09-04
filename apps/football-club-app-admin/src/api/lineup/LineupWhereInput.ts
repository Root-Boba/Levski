import { StringFilter } from "../../util/StringFilter";
import { MatchWhereUniqueInput } from "../match/MatchWhereUniqueInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type LineupWhereInput = {
  id?: StringFilter;
  match?: MatchWhereUniqueInput;
  player?: PlayerWhereUniqueInput;
};
