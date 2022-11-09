import { Box, Container, Tab, Tabs, Typography} from "@mui/material";
import React from 'react';
import PropTypes from 'prop-types';
import ListArrivals from "./ListArrivals";
import ListFeatures from "./ListFeatures";
import ListSpecial from "./ListSpecial";

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
              <ListArrivals/>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ListFeatures />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <ListSpecial />
            </TabPanel>
          </Box>
        </Box>
      </Container>
    )
}