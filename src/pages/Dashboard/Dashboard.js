import { useState } from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../utilities/theme/theme";

import Topbar from "../../appScenes/global/Topbar";
import Sidebar from "../../appScenes/global/Sidebar";

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
    <Helmet>
        <title>Testrunz - application</title>
        <meta property="og:title" content="application" />
      </Helmet>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
};

export default Dashboard;
