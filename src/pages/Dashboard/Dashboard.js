import { useState } from "react";
import { Helmet } from "react-helmet";
import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, tokens, useMode } from "../../utilities/theme/theme";
import Topbar from "../../appScenes/global/Topbar";
import Sidebar from "../../appScenes/global/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { data } from "./mock";
import SvgDelete from "../../icons/SvgDeleteIcon";

const Dashboard = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "_id",
      headerName: "S.NO",
      renderCell: (index) => index.api.getRowIndex(index.row),
    },
    {
      field: "experimentName",
      headerName: "Procedure Name",
      flex: 1,
    },
    {
      field: "labType",
      headerName: "Lab Name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "studentName",
      headerName: "Submitted By",
      flex: 1,
    },
    {
      field: "",
      headerName: "Actions",
      flex: 0.5,
      align: "center",
      headerAlign: 'center',
      renderCell: () => {
        return <SvgDelete />;
      },
    },
  ];
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
              <Box m="20px">
                <Box
                  m="40px 0 0 0"
                  height={window.innerHeight - 150}
                  sx={{
                    "& .MuiDataGrid-root": {
                      border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                      borderBottom: "none",
                    },
                    "& .name-column--cell": {
                      color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.blueAccent[700],
                      borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                      color: `${colors.greenAccent[200]} !important`,
                    },
                  }}
                >
                  <DataGrid
                    getRowId={(row) => row._id}
                    rows={data.data}
                    columns={columns}
                  />
                </Box>
              </Box>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default Dashboard;
