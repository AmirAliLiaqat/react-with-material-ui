import React from 'react';
import Buttons from './sections/Buttons';
import ButtonGroups from './sections/ButtonGroups';
import Checkboxs from './sections/Checkboxs';
import Radios from './sections/Radios';
import Sliders from './sections/Sliders';
import Selects from './sections/Selects';
import TextFields from './sections/TextFields';
import Switchs from './sections/Switchs';

const MaterialUi = () => {

  return (
    <div className="MaterialUi text-center py-5">
      <h1>React-Material UI (MUI)</h1>

      <div className="row my-3">
        <div className="col-6 btns">
          <Buttons/>
        </div>
        <div className="col-6 btnGroup">
          <ButtonGroups/>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-6 radioBtns">
          <Radios/>
        </div>
        <div className="col-6 checkbox py-5">
          <Checkboxs/>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-6 sliders p-5">
          <Sliders/>
        </div>
        <div className="col-6 selects p-5">
          <Selects/>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row my-3">
        <div className="col-6 p-5">
          <TextFields/>
        </div>
        <div className="col-6 p-5">
          <Switchs/>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-6"></div>
        <div className="col-6"></div>
      </div>
    </div>
  );
}

export default MaterialUi;