import React, { useState } from 'react';
import { Slider } from '@mui/material';

const Sliders = () => {
    const [val, setVal] = useState([40,100]);

    const mark = [
        {
            value: 0,
            label: 'start'
        },
        {
            value: 100,
            label: 'middle'
        },
        {
            value: 200,
            label: 'end'
        },
    ];

    const getValue = (e, val) => {
        console.log(val);
    }

    const updateValue = (e, item) => {
        setVal(item);
    }

    return (
        <>
            <h1>👉 Sliders</h1>
            <Slider color='primary' defaultValue={30} valueLabelDisplay='auto' step={10} max={200} marks={mark} onChange={getValue}/>
            <br></br>
            <br></br>
            <Slider color='primary' defaultValue={30} valueLabelDisplay='auto' step={10} max={200} marks={mark} orientation='vertical' onChange={getValue}/>
            <br></br>
            <br></br>
            <Slider color='primary' valueLabelDisplay='auto' step={10} max={200} value={val} onChange={updateValue}/>
        </>
    );
}

export default Sliders;