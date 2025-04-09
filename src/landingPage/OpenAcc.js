import React from 'react';

function OpenAcc() {
    return ( 
        <div className='container mt-5 p-5 '>
            <div className='row text-center'>
                 <h1 className='mb-4 fs-2'>Open a Zerodha account</h1>
                 <p className='mb-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                 <form action="/signup">
                 <button className='p-2 btn btn-primary mt-3 fs-5'style={{width:"20%", margin:"0 auto"}} >Sign up for free</button>
                </form>
            </div>

    
       

        </div>
     );
}

export default OpenAcc;