import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { MindfulnessComponentList } from "./mindfulnessComponent/MindfulnessComponentList";
import { MindfulnessComponentCreate } from "./mindfulnessComponent/MindfulnessComponentCreate";
import { MindfulnessComponentEdit } from "./mindfulnessComponent/MindfulnessComponentEdit";
import { MindfulnessComponentShow } from "./mindfulnessComponent/MindfulnessComponentShow";
import { PatternList } from "./pattern/PatternList";
import { PatternCreate } from "./pattern/PatternCreate";
import { PatternEdit } from "./pattern/PatternEdit";
import { PatternShow } from "./pattern/PatternShow";
import { UiElementList } from "./uiElement/UiElementList";
import { UiElementCreate } from "./uiElement/UiElementCreate";
import { UiElementEdit } from "./uiElement/UiElementEdit";
import { UiElementShow } from "./uiElement/UiElementShow";
import { SubjectList } from "./subject/SubjectList";
import { SubjectCreate } from "./subject/SubjectCreate";
import { SubjectEdit } from "./subject/SubjectEdit";
import { SubjectShow } from "./subject/SubjectShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { TutoringSessionList } from "./tutoringSession/TutoringSessionList";
import { TutoringSessionCreate } from "./tutoringSession/TutoringSessionCreate";
import { TutoringSessionEdit } from "./tutoringSession/TutoringSessionEdit";
import { TutoringSessionShow } from "./tutoringSession/TutoringSessionShow";
import { TutorList } from "./tutor/TutorList";
import { TutorCreate } from "./tutor/TutorCreate";
import { TutorEdit } from "./tutor/TutorEdit";
import { TutorShow } from "./tutor/TutorShow";
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
        title={"NeuroTOT"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="MindfulnessComponent"
          list={MindfulnessComponentList}
          edit={MindfulnessComponentEdit}
          create={MindfulnessComponentCreate}
          show={MindfulnessComponentShow}
        />
        <Resource
          name="Pattern"
          list={PatternList}
          edit={PatternEdit}
          create={PatternCreate}
          show={PatternShow}
        />
        <Resource
          name="UiElement"
          list={UiElementList}
          edit={UiElementEdit}
          create={UiElementCreate}
          show={UiElementShow}
        />
        <Resource
          name="Subject"
          list={SubjectList}
          edit={SubjectEdit}
          create={SubjectCreate}
          show={SubjectShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="TutoringSession"
          list={TutoringSessionList}
          edit={TutoringSessionEdit}
          create={TutoringSessionCreate}
          show={TutoringSessionShow}
        />
        <Resource
          name="Tutor"
          list={TutorList}
          edit={TutorEdit}
          create={TutorCreate}
          show={TutorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
