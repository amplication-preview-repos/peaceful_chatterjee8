import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AvailabilityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Availabilities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="end" source="end" />
        <TextField label="ID" source="id" />
        <TextField label="provider" source="provider" />
        <TextField label="start" source="start" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
