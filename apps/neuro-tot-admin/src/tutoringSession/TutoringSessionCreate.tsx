import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { SubjectTitle } from "../subject/SubjectTitle";
import { TutorTitle } from "../tutor/TutorTitle";

export const TutoringSessionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="endTime" source="endTime" />
        <DateTimeInput label="startTime" source="startTime" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="subject.id" reference="Subject" label="subject">
          <SelectInput optionText={SubjectTitle} />
        </ReferenceInput>
        <ReferenceInput source="tutor.id" reference="Tutor" label="tutor">
          <SelectInput optionText={TutorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
