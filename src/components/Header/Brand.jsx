import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '@mui/icons-material/AlignHorizontalRight';

const Brand = () => {
  return (
    <>
      <NavLink to="/" className="text-decoration-none text-dark"><Logo/> React App</NavLink>
    </>
  )
}

export default Brand
