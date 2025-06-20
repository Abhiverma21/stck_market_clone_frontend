
import React from 'react';

function Versity() {
    return ( 
    <div className='container mt-5'>
        <div className='row'>
            <div className='col-4'>
                <img src='media/images/education.svg' />
            </div>
               
            <div className='col-2'></div>
            <div className='col-6'>
                <h1 className='mt-5 fs-2'>Free and open market education</h1>
                <p className='mt-4 '  style={{fontSize:"18px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='#' className='p-2' style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>

                <p className='mt-4 '  style={{fontSize:"18px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='#' className='p-2'style={{textDecoration:"none"}}>Trading Q&A <i class="fa-solid fa-arrow-right"></i></a>


            </div>
        </div>
    </div>
  
     );
}

export default Versity;