import React from 'react';
import {Button} from '@mui/material';
import {Delete, Send} from '@mui/icons-material';

const Buttons = () => {
  return (
    <>
      <h1>👉 Buttons</h1>
      <br/>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="contained" color="error">Danger</Button>
      <Button variant="contained" disabled>Disabled</Button>
      <br/>
      <br/>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="success">Success</Button>
      <Button variant="outlined" color="error">Danger</Button>
      <Button variant="outlined" disabled>Disabled</Button>
      <br/>
      <br/>
      <Button variant="contained" size='small'>Small</Button>
      <Button variant="contained" size='medium'>Medium</Button>
      <Button variant="contained" size='large'>Large</Button>
      <br/>
      <br/>
      <Button variant="contained" color="error" startIcon={<Delete />}>Delete</Button>
      <Button variant="contained" endIcon={<Send />}>Send</Button>
    </>
  )
}

export default Buttons
