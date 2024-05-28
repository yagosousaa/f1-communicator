// https://fluentsite.z22.web.core.windows.net/quick-start
import {
  FluentProvider,
  teamsLightTheme,
  teamsDarkTheme,
  teamsHighContrastTheme,
  Spinner,
  tokens,
} from "@fluentui/react-components";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useTeamsUserCredential } from "@microsoft/teamsfx-react";
import { HomePage } from "./components/Home/homePage";
import { app, Context } from "@microsoft/teams-js";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */

export default function App() {
  const { loading, themeString } = useTeamsUserCredential({
    clientId: process.env.REACT_APP_CLIENT_ID!,
    initiateLoginEndpoint: process.env.REACT_APP_START_LOGIN_PAGE_URL!,
  });
  return (
    <FluentProvider
      theme={
        themeString === "dark"
          ? teamsDarkTheme
          : themeString === "contrast"
          ? teamsHighContrastTheme
          : {
              ...teamsLightTheme,
              colorNeutralBackground3: "#eeeeee",
            }
      }
      style={{ background: tokens.colorNeutralBackground3 }}
    >
      <Router>
        {loading ? (
          <Spinner style={{ margin: 100 }} />
        ) : (
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        )}
      </Router>
    </FluentProvider>
  );
}
