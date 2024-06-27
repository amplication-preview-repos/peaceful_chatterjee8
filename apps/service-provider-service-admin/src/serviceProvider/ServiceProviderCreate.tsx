import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ServiceProviderCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="availability" multiline source="availability" />
        <div />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="socialMediaAccount" source="socialMediaAccount" />
      </SimpleForm>
    </Create>
  );
};
