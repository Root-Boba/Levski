import { StringFilter } from "../../util/StringFilter";
import { LineupListRelationFilter } from "../lineup/LineupListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  lineups?: LineupListRelationFilter;
  name?: StringNullableFilter;
  nationality?: StringNullableFilter;
  numberField?: IntNullableFilter;
  position?: "Option1";
};
