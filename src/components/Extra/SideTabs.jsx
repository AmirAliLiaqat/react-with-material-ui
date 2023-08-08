import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Group, Roles, Platform } from './Atom';
import { useRecoilValue } from 'recoil';

const SideTabs = (props) => {
    const group = useRecoilValue(Group);
    const roles = useRecoilValue(Roles);
    const platform = useRecoilValue(Platform);

    const tab = props.tabIndex;
    var data = 0;

    return (
        <>
            <List component="nav" aria-label="mailbox folders">
                {
                    ((tab === '1') ? group : (tab === '2') ? roles : platform ).map((curr, index) => {
                        data += curr.count;
                        return(
                            <>
                                <ListItem button key={curr.id}>
                                    <ListItemText primary={curr.title} /> {curr.count}
                                </ListItem>
                            </>
                        )
                    })
                    
                }
                <Divider color="black"/>
                <ListItem button>
                    <ListItemText primary='All members' />{data}
                </ListItem>
            </List>
        </>
    );
}

export default SideTabs;