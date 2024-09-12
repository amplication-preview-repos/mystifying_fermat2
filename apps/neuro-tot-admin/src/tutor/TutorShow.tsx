import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SUBJECT_TITLE_FIELD } from "../subject/SubjectTitle";
import { TUTOR_TITLE_FIELD } from "./TutorTitle";

export const TutorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="bio" source="bio" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="TutoringSession"
          target="tutorId"
          label="TutoringSessions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="endTime" source="endTime" />
            <TextField label="ID" source="id" />
            <TextField label="startTime" source="startTime" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="subject"
              source="subject.id"
              reference="Subject"
            >
              <TextField source={SUBJECT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="tutor" source="tutor.id" reference="Tutor">
              <TextField source={TUTOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
