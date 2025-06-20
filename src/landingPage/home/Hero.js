
import React from 'react';

function Hero() {
  let styles = {marginLeft :"13%",width:"75%"}
    return (
        <div className='container p-5 mb-10'>
          <div className='row text-center '>
            
            <img src='media/images/homeHero.png'   alt='Hero image' className=' p-3'style={styles} ></img>
            <h1 className='mt-5'>Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <form action="/usersignup">
            <button className='p-2 btn btn-primary'style={{width:"20%", margin:"0 auto"}}>Sign up for free</button></form>
          </div>
        </div>
      );
}

export default Hero;