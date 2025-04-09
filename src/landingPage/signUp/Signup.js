

import React from 'react';
import Hero from "./Hero";
import Account from "./Account";
import Investment from './Investment';
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';



function SignUp() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <Investment />
            <Account />
            <Footer />
        </>
     );
}

export default SignUp;