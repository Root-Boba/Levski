import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MATCH_TITLE_FIELD } from "./MatchTitle";
import { PLAYER_TITLE_FIELD } from "../player/PlayerTitle";

export const MatchShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <BooleanField label="HomeGround" source="homeGround" />
        <TextField label="ID" source="id" />
        <TextField label="Opponent" source="opponent" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Lineup" target="matchId" label="Lineups">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Match" source="match.id" reference="Match">
              <TextField source={MATCH_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Player"
              source="player.id"
              reference="Player"
            >
              <TextField source={PLAYER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
