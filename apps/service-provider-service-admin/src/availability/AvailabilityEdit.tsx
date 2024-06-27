import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AvailabilityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="end" source="end" />
        <TextInput label="provider" source="provider" />
        <DateTimeInput label="start" source="start" />
      </SimpleForm>
    </Edit>
  );
};
