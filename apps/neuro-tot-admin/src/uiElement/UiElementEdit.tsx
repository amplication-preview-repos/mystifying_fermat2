import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UiElementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
