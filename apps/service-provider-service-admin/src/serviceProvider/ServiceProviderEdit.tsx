import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ServiceProviderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="availability" multiline source="availability" />
        <div />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="socialMediaAccount" source="socialMediaAccount" />
      </SimpleForm>
    </Edit>
  );
};
