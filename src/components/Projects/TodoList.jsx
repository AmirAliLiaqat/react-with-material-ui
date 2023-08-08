import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Sidebar from '../Pages/Sidebar';
import Footer from '../Footer';
import {Box, TextField, Button} from '@mui/material';
import {Add, Delete} from '@mui/icons-material';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

// get data from local storage
const getLocalItems = () => {
    let list = localStorage.getItem("todoList");    

    if(list) {
        return JSON.parse(localStorage.getItem("todoList"));
    } else {
        return [];
    }
}

const TodoList = () => {
    const [data, setData] = useState('');
    const [items, setItems] = useState(getLocalItems());

    // add items
    const addItems = () => {
        if(data) {
            setItems([...items, data]);
        }
        setData("");
    }

    // delete one item
    const deleteItem = (id) => {
        const updateItems = items.filter((elem, index) => {
            return index !== id;
        })
        setItems(updateItems)
    } 

    // delete all the items
    const deleteAll = () => {
        setItems([]);
    }

    // store data in local storage
    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(items));
    }, [items]);

    return(
        <>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 border-end">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-6 text-center my-auto">
                        <h1><ReceiptLongIcon sx={{ fontSize: 60 }}/></h1>
                        <h1 className='my-3'>😀 Add items which you want 😀</h1>
                        <TextField type='text' label="👉 Add items" value={data} name="search" onChange={(e) => { setData(e.target.value) }} sx={{width: "400px"}} />&nbsp;&nbsp;
                        <Button variant="contained" onClick={addItems} style={ { borderRadius: "50%", width: "50px", height: "50px" } }><Add/></Button>
                        <div className="allItems mb-2">
                            {
                                items.map((elem, index) => {
                                    return(
                                        <Box
                                            sx={{
                                            width: 380,
                                            height: 50,
                                            backgroundColor: 'secondary.dark',
                                            '&:hover': {
                                                backgroundColor: 'secondary.main',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                            borderRadius: 15,
                                            }}
                                            className=" d-flex justify-content-around align-items-center text-white mx-auto my-3 py-1"
                                            key={index}
                                        >
                                            <div>{elem}</div>
                                            <Button variant="contained" color='error' onClick={() => deleteItem(index)} style={ { borderRadius: "50%", width: "40px", height: "40px" } }><Delete/></Button>
                                        </Box>
                                    )
                                })
                            }
                        </div>
                        <Button variant="contained" color="error" startIcon={<Delete />} onClick={deleteAll} disabled={(items.length === 0) ? true : false}>Delete All</Button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default TodoList;