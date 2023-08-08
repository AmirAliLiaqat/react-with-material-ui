import React from 'react';
import { Switch } from '@mui/material';

const Switchs = () => {
    const getValue = (e, val) => {
        console.log(val);
    }

    return (
        <>
            <h1>👉 Switch</h1>
            <Switch />
            <Switch defaultChecked onChange={getValue}/>
            <Switch defaultChecked color="default" />
            <Switch defaultChecked color="secondary" />
            <Switch defaultChecked color="warning" />
            <Switch defaultChecked color="error" />
        </>
    )
}

export default Switchs;