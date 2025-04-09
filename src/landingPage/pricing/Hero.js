

import React from 'react';

function Hero() {
    return (  
        <div className='container'>
            <div className='row mt-5 p-4 text-center ' style={{marginTop:"170px" , marginBottom:"140px"}}>
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>

            <div className='row mt-5 p-4 text-center'>
                <div className='col'>
                    <img src='./media/images/pricing0.svg' style={{width:"70%"}}></img><br/>
                    <h1 className='fs-2 p-3'>Free equity delivery</h1>
                    <p className='fs-5 p-2'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

                </div>
                <div className='col'>
                    <img src='./media/images/intradayTrades.svg' style={{width:"70%"}}></img><br/>
                    <h1 className='fs-3 mt-3'>Intraday and F&O trades</h1>
                    <p className='fs-6 mt-4 p-2'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col'>
                <img src='./media/images/pricing0.svg' style={{width:"70%"}}></img><br/>
                <h1 className='fs-2 mt-3'>Free direct MF</h1>
                <p className='fs-6 mt-3 p-2'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;