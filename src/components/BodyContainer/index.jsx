import React from 'react';
import Footer from '../FooterComponent/Footer';
import Body from '../BodyComponent/Body';

const BodyContainer = () => (
  <div className="BodyContainer">
    <Body />
    <Footer text="About Us" />
  </div>
);
export default BodyContainer;
