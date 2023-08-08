import React from 'react';
import { TextField } from '@mui/material';

const TextFields = () => {
    return (
        <>
            <h1>👉 TextField</h1>
            <TextField label="enter your name" color='primary' fullWidth/>
            <br />
            <br />
            <TextField label="enter your phone" color='secondary' variant='filled' fullWidth/>
            <br />
            <br />
            <TextField label="enter your email" color='success' variant='standard' fullWidth/>
            <br />
        </>
    )
}

export default TextFields;
