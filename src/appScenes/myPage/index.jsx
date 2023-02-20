import { Box, useTheme } from "@mui/material";
import { tokens } from "../../utilities/theme/theme";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { USER_DATA } from "../../utilities/localStorageConstants";
import { useEffect } from "react";
import { experimentsMiddleWare } from "./store/mypageMiddleware";
import SvgDelete from "../../icons/SvgDeleteIcon";
import Loader from "../../components/Loader/Loader";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    let userData = localStorage.getItem(USER_DATA);
    userData = JSON.parse(userData);
    dispatch(
      experimentsMiddleWare({
        _id: userData?.user?.email,
        role: userData?.user?.role,
      })
    );
  }, []);

  const { isLoading, data } = useSelector(({ experimentsReducers }) => {
    return {
      data: experimentsReducers.data,
      isLoading: experimentsReducers.isLoading,
    };
  });

  const columns = [
    {
      field: "_id",
      headerName: "S.NO",
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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="32,441"
              subtitle="runz completed"
              progress="0.30"
              increase="+5%"
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title="1,325,134"
              subtitle="marks gained"
              progress="0.80"
              increase="+43%"
              icon={
                <TrafficIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}
        </Box>
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
              rows={data?.data ? data.data : []}
              columns={columns}
              pageSize={15}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
