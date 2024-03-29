import React from 'react';
import Img2 from '../Image/hed.png';
import './Herosection.css';

function Herosection() {
  return (
    <div className="herosection bg-light">
      <div className="container-fluid">
        <div className="row align-items-center no-gutters">
          <div className="col-xl-5 col-lg-6 col-md-12">
            <div className="py-5 py-lg-0">
              <h1 className="text-dark display-4 fw-bold">ANTENATAL CARE</h1>
              <p className="text-white-50 mb-4 lead"></p>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
            <img src={Img2} alt="hero" className="hero-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;

