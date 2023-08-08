import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      <TextField
            label="Search"
            fullWidth
            id="fullWidth"
            InputProps={{
                endAdornment: (
                <InputAdornment>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
                )
            }}
        />
    </>
  )
}

export default Search;