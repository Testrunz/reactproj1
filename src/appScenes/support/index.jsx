import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { tokens } from "../../utilities/theme/theme";
import styles from "./index.module.css";
import classNames from "classnames";
import FeedBackTab from "./FeedBackTab";
import Loader from "../../components/Loader/Loader";

const cx = classNames.bind(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Support = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isLoader, setLoader] = React.useState(false);
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {isLoader && <Loader />}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            indicatorColor={colors.greenAccent[500]}
          >
            <Tab
              style={{
                color: value === 0 ? colors.greenAccent[500] : colors.grey[100],
              }}
              label="FeedBack"
              {...a11yProps(0)}
            />
            <Tab
              style={{
                color: value === 1 ? colors.greenAccent[500] : colors.grey[100],
              }}
              label="Help Guide"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <FeedBackTab setLoader={setLoader} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </>
  );
};

export default Support;
