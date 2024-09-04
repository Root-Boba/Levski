import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { LineupTitle } from "../lineup/LineupTitle";

export const MatchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <BooleanInput label="HomeGround" source="homeGround" />
        <ReferenceArrayInput
          source="lineups"
          reference="Lineup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LineupTitle} />
        </ReferenceArrayInput>
        <TextInput label="Opponent" source="opponent" />
      </SimpleForm>
    </Create>
  );
};
