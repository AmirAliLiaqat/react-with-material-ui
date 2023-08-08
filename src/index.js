import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import './index.css';
import App from './App';
// import Slide from './components/Slide';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <StrictMode>
      <RecoilRoot>
        <App/>
        {/* <Slide/> */}
      </RecoilRoot>
    </StrictMode>
  </BrowserRouter>
);
