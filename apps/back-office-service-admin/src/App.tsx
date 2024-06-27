import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SupportList } from "./support/SupportList";
import { SupportCreate } from "./support/SupportCreate";
import { SupportEdit } from "./support/SupportEdit";
import { SupportShow } from "./support/SupportShow";
import { ReportingList } from "./reporting/ReportingList";
import { ReportingCreate } from "./reporting/ReportingCreate";
import { ReportingEdit } from "./reporting/ReportingEdit";
import { ReportingShow } from "./reporting/ReportingShow";
import { MonitoringList } from "./monitoring/MonitoringList";
import { MonitoringCreate } from "./monitoring/MonitoringCreate";
import { MonitoringEdit } from "./monitoring/MonitoringEdit";
import { MonitoringShow } from "./monitoring/MonitoringShow";
import { ServiceManagementList } from "./serviceManagement/ServiceManagementList";
import { ServiceManagementCreate } from "./serviceManagement/ServiceManagementCreate";
import { ServiceManagementEdit } from "./serviceManagement/ServiceManagementEdit";
import { ServiceManagementShow } from "./serviceManagement/ServiceManagementShow";
import { UserManagementList } from "./userManagement/UserManagementList";
import { UserManagementCreate } from "./userManagement/UserManagementCreate";
import { UserManagementEdit } from "./userManagement/UserManagementEdit";
import { UserManagementShow } from "./userManagement/UserManagementShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"BackOfficeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Support"
          list={SupportList}
          edit={SupportEdit}
          create={SupportCreate}
          show={SupportShow}
        />
        <Resource
          name="Reporting"
          list={ReportingList}
          edit={ReportingEdit}
          create={ReportingCreate}
          show={ReportingShow}
        />
        <Resource
          name="Monitoring"
          list={MonitoringList}
          edit={MonitoringEdit}
          create={MonitoringCreate}
          show={MonitoringShow}
        />
        <Resource
          name="ServiceManagement"
          list={ServiceManagementList}
          edit={ServiceManagementEdit}
          create={ServiceManagementCreate}
          show={ServiceManagementShow}
        />
        <Resource
          name="UserManagement"
          list={UserManagementList}
          edit={UserManagementEdit}
          create={UserManagementCreate}
          show={UserManagementShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
