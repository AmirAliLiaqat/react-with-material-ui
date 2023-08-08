import React, { useState } from 'react';
import Demi from './Demi';
import Slider from '@mui/material/Slider';

const Slide = () => {
  const [data, setData] = useState(false);

  const CallEvent = (e) => {
    const amount = e.target.value;
    // console.log(amount);
    // console.log(amount % 2);

    ((amount % 2) !== 0) ? setData(true) : setData(false);
    
  }

  return(
    <div className='slider'>
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={CallEvent} />  
      {
        data && <Demi/>
      }
    </div>
  )
}

export default Slide;