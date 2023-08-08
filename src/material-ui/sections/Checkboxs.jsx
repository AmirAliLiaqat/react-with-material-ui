import React from 'react';
import {Favorite, Bookmark, FavoriteBorder, BookmarkBorder} from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';

const Checkboxs = () => {
  return (
    <>
        <h1>👉 Checkbox</h1>
        <br/>
        <Checkbox defaultChecked></Checkbox>
        <Checkbox defaultChecked color='default'></Checkbox>
        <Checkbox defaultChecked color='secondary'></Checkbox>
        <Checkbox defaultChecked color='success'></Checkbox>
        <Checkbox defaultChecked color='error'></Checkbox>
        <br/>
        <br/>
        <Checkbox color='default' icon={<Favorite />} checkedIcon={<FavoriteBorder />}></Checkbox>
        <Checkbox color='default' icon={<Bookmark />} checkedIcon={<BookmarkBorder />}></Checkbox>
        <Checkbox color='default' icon={<FavoriteBorder />} checkedIcon={<Favorite />}></Checkbox>
        <Checkbox color='default' icon={<BookmarkBorder />} checkedIcon={<Bookmark />}></Checkbox>

      
    </>
  )
}

export default Checkboxs
