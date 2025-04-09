
import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-2'>
            <div className='row p-5'>
                <div className='col-6'>
                <img src='media/images/largestBroker.svg' ></img>

                </div>
                <div className='col-6 p-5 '>
                 <h1>Free and open market education</h1>
                 <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <div className='row ml-3 '>
                        <div className='col-6 pl-2'>
                        <li>Future and Option</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                         </div>
                        <div className='col-6 pl-5 text-right'>
                        <li>Stocks</li>
                        <li>Direct  fund</li>
                        <li>Bonds & Goverment</li>
                     </div>
                    <img src='media/images/presslogos.png' className='m-3'/>
                    </div>

                </div>
            </div>
        </div>
     );
};

export default Awards;
