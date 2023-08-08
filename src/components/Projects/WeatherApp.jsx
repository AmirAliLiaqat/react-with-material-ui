import React, { useEffect, useState } from 'react';
import Header from '../Header';
import Sidebar from '../Pages/Sidebar';
import Footer from '../Footer';
import TextField from '@mui/material/TextField';
import CloudIcon from '@mui/icons-material/Cloud';

const WeaterApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Lahore');

  useEffect( () =>{
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6a4a873e9d21cf4f51eb1f87d0a33152`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    }

    fetchApi();
      
  }, [search])

  const inputEvent = (e) => {
    const data = e.target.value;
    setSearch(data);
  }

  return(
    <>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 border-end">
            <Sidebar/>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6 text-center my-auto">
            <h1><CloudIcon sx={{ fontSize: 60 }}/></h1>
            <h1 className='my-3'>Weather App</h1>
            <TextField type='text' label="Search by city" value={search} name="search" onChange={inputEvent} sx={{width: "400px"}} />
            <div className="allItems my-4">
              {
                !city ? (
                  <h1 className='fw-bolder display-5'>No Data Found</h1>
                ) : (
                  <div>
                    <h1 className="location text-capitalize display-4 my-4">{search}</h1>
                    <h2 className="temp my-4">{city.temp} ° Calc</h2>
                    <h4 className="temp_min_max my-4">Min : {city.temp_min} ° Calc | Max : {city.temp_max} ° Calc</h4>
                    <h3 className="temp_pres_humidity my-4">Pressure : {city.pressure} | Humidity : {city.humidity}</h3>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default WeaterApp;