
import React from 'react';
import Hero from "./Hero.js";
import Awards  from './Awards';
import Education from './Education';
import Pricing from './Pricing';
import Versity from './Versity.js';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import OpenAcc from '../OpenAcc.js';
function HomePage() {
    return ( 
        <>
      
        <Navbar />
        <Hero />
        <Education />
        <Awards />
        <Pricing /> 
        <Versity />
        <OpenAcc />
        <Footer />


        </>
     );
}

export default HomePage;