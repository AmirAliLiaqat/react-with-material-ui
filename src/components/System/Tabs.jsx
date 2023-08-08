import React from 'react';
import TabsContent from './TabsContent';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Tabs = () => {
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            <Box sx={{ margin: '40px 0' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Group" value="1" sx={{textTransform: 'none'}} />
                            <Tab label="Roles" value="2" sx={{textTransform: 'none'}} />
                            <Tab label="Platform" value="3" sx={{textTransform: 'none'}} />
                        </TabList>
                    </Box>
                    <TabPanel value="1"><TabsContent tabIndex={value}/></TabPanel>
                    <TabPanel value="2"><TabsContent tabIndex={value}/></TabPanel>
                    <TabPanel value="3"><TabsContent tabIndex={value}/></TabPanel>
                </TabContext>
            </Box>
        </>
    )
}

export default Tabs;