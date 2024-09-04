import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LineupListRelationFilter } from "../lineup/LineupListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MatchWhereInput = {
  date?: DateTimeNullableFilter;
  homeGround?: BooleanNullableFilter;
  id?: StringFilter;
  lineups?: LineupListRelationFilter;
  opponent?: StringNullableFilter;
};
