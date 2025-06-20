
import React from 'react';
import Hero from "./Hero"
import Left from "./Left"
import Right from "./Right"
import Universe from "./Universe";
import Navbar from '../Navbar.js';
import Footer from '../Footer.js';

function Products() {
    return (  
        <>
        
        <Navbar />
        <Hero />
        <Left 
        image = "./media/images/kite.png" 
        productName="Kite" 
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
        tryDemo="#"  
        learn="#" 
        google="#" 
        app="#"/>
        <Right  
        image = "./media/images/console.png" 
        productName="Console" 
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learn="#" 
        google="#" 
        app="#"/>
        
        <Left 
         image = "./media/images/Coin.png" 
         productName="Coin" 
         productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
         tryDemo="#"  
         learn="#" 
         google="#" 
         app="#" />
         <Right 
          image = "./media/images/kiteconnect.png" 
          productName="Kite Connect API" 
          productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." 
          tryDemo="#"  
          learn="#" 
          google="#" 
          app="#" />
          <Left
           image = "./media/images/varsity.png" 
           productName="Varsity Mobile" 
           productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
           tryDemo="#"  
           learn="#" 
           google="#" 
           app="#" />
           <Universe />
        <Footer />
        </>
    );
}

export default Products;