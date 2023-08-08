import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Unstable_Grid2';
import { Group, Roles, Platform } from './Atom';
import { useRecoilValue } from 'recoil';

const TabsContent = (props) => {
    const group = useRecoilValue(Group);
    const roles = useRecoilValue(Roles);
    const platform = useRecoilValue(Platform);

    const tab = props.tabIndex;
    var totalCount = 0;

    const activeTab = (id, title) => {
        console.log(`Tab ${tab} item ${title} activated...`);
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid lg={3} md={6} sm={12} xs={12} sx={{ borderRight: 1, borderColor: 'divider' }}>
                        <List component="nav" aria-label="mailbox folders">
                            {
                                ((tab === '1') ? group : (tab === '2') ? roles : platform ).map((curr, index) => {
                                    // {id, title, count} = curr
                                    // console.log(curr);
                                    totalCount += curr.count;
                                    return(
                                        <ListItem button key={index} onClick={() => activeTab(curr.id, curr.title)}>
                                            <ListItemText primary={curr.title} /> {curr.count}
                                        </ListItem>
                                    )
                                })
                            }
                            <Divider color="black"/>
                            <ListItem button>
                                <ListItemText primary='All members' />{totalCount}
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid lg={9} md={6} sm={12} xs={12}>
                        {tab}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default TabsContent;