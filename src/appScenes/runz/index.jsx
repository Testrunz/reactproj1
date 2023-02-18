import { Box, useTheme } from "@mui/material";
import { tokens } from "../../utilities/theme/theme";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { USER_DATA } from "../../utilities/localStorageConstants";
import { useEffect } from "react";
import SvgDelete from "../../icons/SvgDeleteIcon";
import Loader from "../../components/Loader/Loader";
import { experimentsRunzMiddleWare } from "./store/runzMiddleware";
import { getDateString, isEmpty } from "../../utilities/helpers";

const Runz = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  let userData = localStorage.getItem(USER_DATA);
  userData = JSON.parse(userData);
  useEffect(() => {
    dispatch(
      experimentsRunzMiddleWare({
        id: userData?.user?._id,
        role: userData?.user?.role,
      })
    );
  }, []);

  const { isLoading, data } = useSelector(({ experimentsRunzReducers }) => {
    return {
      data: experimentsRunzReducers.data,
      isLoading: experimentsRunzReducers.isLoading,
    };
  });

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
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
      field: "procedureDescription",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Assigned By",
      flex: 0.8,
      renderCell: () => {
        return userData?.user?.email;
      },
    },
    {
      field: "grade",
      headerName: "Grade",
      flex: 0.4,
      renderCell: (value) => {
        if (!isEmpty(value.row?.grade)) {
          return value.row?.grade;
        } else {
          return "-";
        }
      },
    },
    {
      field: "time",
      headerName: "Created Time",
      flex: 0.7,
      renderCell: (value) => {
        const date = new Date(value.row.time).toDateString();
        return getDateString(date, "ddd MMM DD YYYY");
      },
    },
    {
      field: "",
      headerName: "Actions",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return <SvgDelete />;
      },
    },
  ];

  return (
    <>
      {isLoading && <Loader />}
      <Box m="20px">
        <Header title="Runz" subtitle="Managing Your Runz Here" />
        <Box m="20px">
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
              // pageSize={15}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Runz;
