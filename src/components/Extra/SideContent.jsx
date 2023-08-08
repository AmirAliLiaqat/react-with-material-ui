import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DataGrid } from '@mui/x-data-grid';
import SideTabs from './SideTabs';

const columns = [
  { field: 'userName', headerName: 'User Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 230 },
];

const rows = [
  { id: 1, userName: 'Jon Snow', email: 'kem.adams@gmail.com'},
  { id: 2, userName: 'Cersei Lannister', email: 'kem.adams@gmail.com'},
  { id: 3, userName: 'Arya Stark', email: 'kem.adams@gmail.com'},
  { id: 4, userName: 'Daenerys Targaryen', email: 'kem.adams@gmail.com'},
  { id: 5, userName: 'John Melisandre', email: 'kem.adams@gmail.com'},
  { id: 6, userName: 'Ferrara Clifford', email: 'kem.adams@gmail.com'},
  { id: 7, userName: 'Rossini Frances', email: 'kem.adams@gmail.com'},
  { id: 8, userName: 'Frances Lannister', email: 'kem.adams@gmail.com'},
  { id: 9, userName: 'Harvey Roxie', email: 'kem.adams@gmail.com'},
  { id: 10, userName: 'Olivia Noah', email: 'kem.adams@gmail.com'},
  { id: 11, userName: 'Emma Liam', email: 'kem.adams@gmail.com'},
  { id: 12, userName: 'Amelia Oliver', email: 'kem.adams@gmail.com'},
];


const SideContent = () => {
    const [value, setValue] = React.useState('1');
    const data = SideTabs;
    console.log("🚀 ~ file: SideContent.jsx:35 ~ SideContent ~ data:", data)
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
        <>
            <Container maxWidth="xl">
                <Box component="h3">Beavers</Box>

                <Box>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Members" value="1" sx={{textTransform: 'none'}}/>
                                <Tab label="Platforms" value="2" sx={{textTransform: 'none'}} />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Box sx={{ height: 'auto', width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    initialState={{
                                        pagination: {
                                            paginationModel: { page: 0, pageSize: 5 },
                                        },
                                    }}
                                    pageSizeOptions={[5, 10, 15]}
                                    checkboxSelection
                                />
                            </Box>
                        </TabPanel>
                        <TabPanel value="2">Item Two</TabPanel>
                    </TabContext>
                </Box>
            </Container>
        </>
    )
}

export default SideContent;