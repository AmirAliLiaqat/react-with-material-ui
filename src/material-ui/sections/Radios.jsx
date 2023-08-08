import React, {useState} from 'react';
import {Radio, RadioGroup, FormControl, FormLabel, FormControlLabel} from '@mui/material';

const Radios = () => {
    const [gender, setGender] = useState("");
  
    const radioEvent = (e) => {
      setGender(e.target.value);
    }
    
    return (
        <>
            <h1>👉 Radio Buttons</h1>
            <br/>
            <Radio value="male" checked={gender==="male"} onChange={radioEvent}/>
            <span>Male</span>
            <Radio value="female" checked={gender==="female"} onChange={radioEvent}/>
            <span>Female</span>
            <Radio value="other" checked={gender==="other"} onChange={radioEvent}/>
            <span>Other</span>
            <br/>
            <br/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default Radios
