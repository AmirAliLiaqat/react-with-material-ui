import React from 'react';
import Box from '@mui/material/Box';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const nevigate = useNavigate();

    return (
        <>
            <Box component="h3"><ArrowBack sx={{cursor: 'pointer', marginRight: '20px'}} onClick={() => {nevigate(-1)}}/> User Management</Box>
        </>
    )
}

export default Header;