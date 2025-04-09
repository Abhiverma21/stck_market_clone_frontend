
import React from 'react';
import Hero from "./Hero.js"
import Charges from "./Charges.js"
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';
import OpenAcc from "../OpenAcc.js"

function Pricing() {
    return ( 
        <>
        <Navbar />
            <Hero />
            <OpenAcc />
            <Charges />
            <Footer />
        </>
     );
}

export default Pricing;