import { Lineup } from "../lineup/Lineup";

export type Player = {
  createdAt: Date;
  id: string;
  lineups?: Array<Lineup>;
  name: string | null;
  nationality: string | null;
  numberField: number | null;
  position?: "Option1" | null;
  updatedAt: Date;
};
