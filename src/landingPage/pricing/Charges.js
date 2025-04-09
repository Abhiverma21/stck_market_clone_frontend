
import React from 'react';
function Charges() {
    return ( 
        <div className='container border-top' style={{marginTop:"100px"}}>
            <div className='row'>
                <div className='col-8'>
                    <h4 className='text-center mt-5'><a href="#">Brokerage calculator</a> </h4>
                    <ul className='mt-3 p-5'>
                        <li>Call and Trade auto square off;additional charges of 50rs. +GST per order</li>
                        <li>Digital Contract notes sends via e-mail</li>
                        <li>Physical copies of the contract notes will be provided by charging rs. 20 and currior charges applied</li>
                        <li>For NRI accoutn 0.5% of 100rs. executed order for equity</li>
                        <li>If the account is in debit balance, any order placed will be charged 40 rs. per executed order</li>
                    </ul>
                </div>

                <div className='col-4 mt-5'>
                <h4><a href="#">List of Charges </a> </h4>
                </div>
            </div>
        </div>
     );
}

export default Charges;