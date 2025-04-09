
import React from 'react';
import "../../index.css"
function Hero() {
    return ( 
        <div className='container-fluid sprt p-5 '>
             <div className="row pt-2 mb-5 mx-4" >
            <div className="col-7">
                <h1 className='fs-4'>Support Portal</h1>
                <h4 className='mt-5 pt-1 fs-4'>Search for an answer or browse help topics to create a ticket</h4>
                <input type="text" placeholder="Eg. how do i activate F&O, why my order is... " className='inp mt-3 p-3'/>
                <div className="row mt-4">
                    <div className="col-3 border-bottom">Track account </div>&nbsp;
                    <div className="col-3 border-bottom"> Track segment </div>&nbsp;
                    <div className="col-3 border-bottom"> Intraday margins</div>
                </div>
                <div className="row mt-3">
                    <div className='col-3 border-bottom'>Kite user manual</div>
                </div>
            </div>
            <div className="col-5 ">
                <a href='#' className='an' >Track Tickets</a>
                <h4 className='mt-5 pt-5'>Featured</h4>
                <ol className='mt-2 se'>
                    <a href = "#"><li>Rights Entitlements listing in February 2025</li><br/></a>
                    <a href = "#"><li>Latest Intraday leverages and Square-off timings</li></a>
                </ol>
            </div>
        </div>
        </div>
     );
}

export default Hero;