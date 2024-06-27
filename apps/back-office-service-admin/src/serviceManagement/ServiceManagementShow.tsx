import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const ServiceManagementShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="service" source="service" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="updates" source="updates" />
      </SimpleShowLayout>
    </Show>
  );
};
