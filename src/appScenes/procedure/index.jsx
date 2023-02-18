import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../utilities/theme/theme";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { moreInfoMiddleWare } from "./store/procedureMiddleware";
import Loader from "../../components/Loader/Loader";

const Procedure = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moreInfoMiddleWare());
  }, []);

  const { isLoading, data } = useSelector(({ moreInfoReducers }) => {
    return {
      data: moreInfoReducers.data,
      isLoading: moreInfoReducers.isLoading,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "ProcedureName",
      headerName: "Procedure Name",
      flex: 1,
    },
    {
      field: "labtype",
      headerName: "Lab Name",
      flex: 1,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
    },
    {
      field: "year",
      headerName: "Year",
    },
    {
      field: "institute",
      headerName: "Institute",
      flex: 0.8,
    },
  ];

  return (
    <>
      {isLoading && <Loader />}
      <Box m="20px">
        <Header title="Procedures" subtitle="List of procedures" />
        <Box
          m="40px 0 0 0"
          height={window.innerHeight - 220}
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
            rows={data?.data ? data.data : []}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
};

export default Procedure;
