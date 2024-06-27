import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ServiceManagementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="service" source="service" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
