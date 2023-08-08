import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Roles = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}} >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '20%' }}
      >
        <Tab label="All members" sx={{textTransform: 'none'}} />
        <Tab label="Spark" sx={{textTransform: 'none'}} ><Box>10</Box> <Box>20</Box></Tab>
        <Tab label="Bervers" sx={{textTransform: 'none'}} />
        <Tab label="Exponential" sx={{textTransform: 'none'}} />
        <Tab label="Morph" sx={{textTransform: 'none'}} />
        <Tab label="Data team" sx={{textTransform: 'none'}} />
        <Tab label="Un-assigned" sx={{textTransform: 'none'}} />
      </Tabs>
      <TabPanel value={value} index={0}>Item One</TabPanel>
      <TabPanel value={value} index={1}>Item Two</TabPanel>
      <TabPanel value={value} index={2}>Item Three</TabPanel>
      <TabPanel value={value} index={3}>Item Four</TabPanel>
      <TabPanel value={value} index={4}>Item Five</TabPanel>
      <TabPanel value={value} index={5}>Item Six</TabPanel>
      <TabPanel value={value} index={6}>Item Seven</TabPanel>
    </Box>
  );
}

export default Roles;