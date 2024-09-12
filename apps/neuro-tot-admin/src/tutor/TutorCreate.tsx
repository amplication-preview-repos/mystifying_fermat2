import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TutoringSessionTitle } from "../tutoringSession/TutoringSessionTitle";

export const TutorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="tutoringSessions"
          reference="TutoringSession"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TutoringSessionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
