import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Error = () => {
  return (
    <>
      <Header/>
      <div className="container-fluid text-center" style={{height: "100vh", padding: "10rem"}}>
        <h1 className='display-1'>404</h1>
        <h1>OOps! page not found!</h1>
      </div>
      <Footer/>
    </>
  )
}

export default Error;