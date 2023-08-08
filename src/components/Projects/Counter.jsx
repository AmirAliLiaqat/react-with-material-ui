import React, {useState} from 'react';
import Header from '../Header';
import Sidebar from '../Pages/Sidebar';
import Footer from '../Footer';
import Button from '@mui/material/Button';
import {Add, Remove} from '@mui/icons-material';

const Counter = () => {
    const [data, setData] = useState(0);

    const increment = () => {
        setData(data + 1);
    }

    const decrement = () => {
        (data === 0) ? setData(0) : setData(data - 1);
    }

    const reset = () => {
        setData(0);
    }

    return (
        <main>
            <Header/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 border-end">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-6 text-center my-auto">
                        <div className="main-div mb-3">
                            <div className="display-1">{data}</div>
                        </div>
                        <div className="counter-btns">
                            <Button variant="contained" size='large' onClick={increment}><Add/></Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button variant="contained" size='large' onClick={decrement}><Remove/></Button>
                            <br /><br />
                            <Button variant="contained" size='large' color='error' onClick={reset}>Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default Counter;