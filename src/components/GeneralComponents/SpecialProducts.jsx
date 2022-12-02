import { Box, Container, Tab, Tabs, Typography} from "@mui/material";
import React from 'react';
import PropTypes from 'prop-types';
import Service from "../Service/Service";

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
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

  TabPanel.propTypes = {
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function SpecialProducts() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="containerSpecialProducts">
      <Box className="container containerOffPadding">
        <Box className="title">
            <Typography variant="h2" color="initial" className="title-inner1">
                Special Products
            </Typography>
        </Box>
        <Box className="sectionsTab">
          <Box className="containerTabs">
            <Tabs value={value} onChange={handleChange}>
              <Tab label="NEW ARRIVALS" {...a11yProps(0)} />
              <Tab label="FEATURES" {...a11yProps(1)} />
              <Tab label="SPECIAL" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Service only={"men"} start={0} end={4}/>
            <Service only={"women"} start={0} end={4}/>
            <Service only={"men"} start={5} end={9}/>
            <Service only={"women"} start={5} end={9}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Service only={"men"} start={10} end={14}/>
            <Service only={"women"} start={10} end={14}/>
            <Service only={"men"} start={15} end={19}/>
            <Service only={"women"} start={15} end={19}/>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Service only={"men"} start={19} end={23}/>
            <Service only={"women"} start={17} end={21}/>
            <Service only={"men"} start={24} end={28}/>
            <Service only={"women"} start={22} end={28}/>
          </TabPanel>
        </Box>
      </Box>
    </Container>
  )
}