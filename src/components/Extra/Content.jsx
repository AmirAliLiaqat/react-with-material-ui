import React from 'react';
// import SideTabs from './SideTabs'
// import SideContent from './SideContent';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

const Content = (props) => {
    return (
        <>
            {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item lg={3} md={6} sm={12} xs={12} sx={{ borderRight: 1, borderColor: 'divider' }}>
                        <SideTabs tabIndex={props.tabIndex}/>
                    </Grid>
                    <Grid item lg={9} md={6} sm={12} xs={12}>
                        <SideContent/>
                    </Grid>
                </Grid>
            </Box> */}
            <Content tabIndex={props.tabIndex}/>
        </>
    )
}

export default Content;