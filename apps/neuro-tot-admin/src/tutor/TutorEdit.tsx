import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TutoringSessionTitle } from "../tutoringSession/TutoringSessionTitle";

export const TutorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};