import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../utilities/theme/theme";

import Topbar from "../../appScenes/global/Topbar1";

const ProcedureOuter = () => {
  const [theme, colorMode] = useMode();
  return (
    <>
    <Helmet>
        <title>Testrunz - Procedure</title>
        <meta property="og:title" content="Procedure" />
      </Helmet>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Topbar />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </>
  );
};

export default ProcedureOuter;
