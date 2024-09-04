import { Lineup as TLineup } from "../api/lineup/Lineup";

export const LINEUP_TITLE_FIELD = "id";

export const LineupTitle = (record: TLineup): string => {
  return record.id?.toString() || String(record.id);
};
