import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../utilities/theme/theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getaccessMiddleWare } from "./store/settingMiddleware";
import { USER_DATA } from "../../utilities/localStorageConstants";
import Loader from "../../components/Loader/Loader";

const Setting = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    let userData = localStorage.getItem(USER_DATA);
    userData = JSON.parse(userData);
    dispatch(
      getaccessMiddleWare({
        department: userData?.user?.department,
        instituteName: userData?.user?.instituteName,
        lab: userData?.user?.labtype,
        role: userData?.user?.role,
      })
    );
  }, [dispatch]);

  const { isLoading, data } = useSelector(({ getaccessReducers }) => {
    return {
      data: getaccessReducers.data,
      isLoading: getaccessReducers.isLoading,
    };
  });

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.7,
    },

    {
      field: "country",
      headerName: "Country",
      flex: 1,
    },
    {
      field: "instituteName",
      headerName: "Institute Name",
      flex: 0.7,
    },
  ];

  return (
    <>
      {isLoading && <Loader />}
      <Box m="20px">
        <Header title="Settings" subtitle="Settings management" />
        <Box
          m="40px 0 0 0"
          height="75vh"
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`,
            },
          }}
        >
          <DataGrid
            getRowId={(row) => row._id}
            rows={data ? data : []}
            columns={columns}
            pageSize={15}
          />
        </Box>
      </Box>
    </>
  );
};

export default Setting;
