import React, { useState } from 'react';
import { Select, MenuItem } from '@mui/material';

const Selects = () => {
    const [val, setVal] = useState('');

    const changeVal = (e) => {
        setVal(e.target.value);
    }

    return (
        <>
            <h1>👉 Select</h1>
            <Select value={val} displayEmpty onChange={changeVal}>
                <MenuItem value="">Select Count</MenuItem>
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
            </Select>
        </>
    );
}

export default Selects;