import React from 'react';
import Header from '../Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from '../Footer';

const Services = () => {
  return (
    <main>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 border-end">
            <Sidebar/>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6">
            <Content/>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Services;