import { Match } from "../match/Match";
import { Player } from "../player/Player";

export type Lineup = {
  createdAt: Date;
  id: string;
  match?: Match | null;
  player?: Player | null;
  updatedAt: Date;
};
