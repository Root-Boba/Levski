import { Lineup } from "../lineup/Lineup";

export type Match = {
  createdAt: Date;
  date: Date | null;
  homeGround: boolean | null;
  id: string;
  lineups?: Array<Lineup>;
  opponent: string | null;
  updatedAt: Date;
};
