import React, {useState} from 'react';
import Header from '../Header';
import Sidebar from '../Pages/Sidebar';
import Footer from '../Footer';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';

const ChatCounter = () => {
    const [data, setData] = useState(0);

    const increment = () => {
        setData(data + 1);
        document.title = `Chat (${data + 1})`;
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
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}

export default ChatCounter;