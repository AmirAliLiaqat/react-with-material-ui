import React from 'react';
import Header from '../Header';
import Sidebar from './Sidebar';
import Footer from '../Footer';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <Header/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 border-end">
            <Sidebar/>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-6">
            <div className="row p-5">
              <div className="col-lg-6 col-sm-12">
                <div className="about-img-holder">
                  <img src="images/web.jpg" className="about-img animated w-100 mb-3" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about-caption">
                  <p className="section-subtitle">Who Am I ?</p>
                  <h2 className="section-title mb-3">About Me</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste culpa! 
                    <br/> 
                    <br/> 
                    Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!              
                  </p>
                  <NavLink to="/contact" className="text-decoration-none text-dark mt-3">
                    <Button variant="contained" size='large' sx={{margin: '10px 0'}}>Contact Us</Button>
                  </NavLink>
                </div>      
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default About;