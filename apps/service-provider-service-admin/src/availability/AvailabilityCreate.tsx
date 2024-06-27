import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AvailabilityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date" source="date" />
        <DateTimeInput label="end" source="end" />
        <TextInput label="provider" source="provider" />
        <DateTimeInput label="start" source="start" />
      </SimpleForm>
    </Create>
  );
};
