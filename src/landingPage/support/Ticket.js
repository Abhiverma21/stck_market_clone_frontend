
import React from 'react';
import "../../index.css";
function Ticket() {
    return ( 
       <div className='container '>
        
       
      
        <h1 className='mt-5 '>To create a ticket, select a relevant option</h1>
        <div className='row mt-5 p-5'>
            <div className='col-4'>
                &nbsp;<h4><i class="fa fa-plus-circle"></i>  Account opening</h4>
                
                <li><a href="#">Getting started</a></li>
                <li><a href="#">Online</a></li>
                <li><a href="#">Offline</a></li>
                <li><a href="#">Charges</a></li>
                <li><a href="#">Company, Partnership and HUF</a></li>
                <li><a href="#">Non Resident Indian (NRI)</a></li>
                
            </div>
            <div className='col-4'>
            <h4 className='mt-4'><i class="fa-solid fa-user"></i>Your Zerodha Account</h4>
            <li><a href="#">Login credential</a></li>
                <li><a href="#">Your profile</a></li>
                <li><a href="#">Notification</a></li>
                <li><a href="#">CMR</a></li>
                <li><a href="#">Nomination</a></li>
                <li><a href="#">Transfer</a></li>
            </div>
            <div className='col-4'>
            <h4 className='mt-4'><i class="fa-solid fa-chart-simple"></i>Trades and Markets</h4>
            <li><a href="#">Trading FAQ</a></li>
                <li><a href="#">Kite</a></li>
                <li><a href="#">Margins</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Cooperation</a></li>
                <li><a href="#">Kite features</a></li>
            </div>
        </div>
        <div className='row  p-5'>
            <div className='col-4'>
            <h4 ><i class="fa-solid fa-credit-card"></i>Funds</h4>
                
                <li><a href="#">Fund Withdraw</a></li>
                <li><a href="#">Adding fund</a></li>
                <li><a href="#">Adding bank Accounts</a></li>
                <li><a href="#">eManders</a></li>
                
                
            </div>
            <div className='col-4'>
            <h4><i class="fa-solid fa-chart-pie"></i>Console</h4>
            <li><a href="#">IPO</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Fund statement</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Referal</a></li>
            </div>
            <div className='col-4'>
            <h4><i class="fa-solid fa-coins"></i>Coin</h4>
            <li><a href="#">Mutual Funds    </a></li>
                <li><a href="#">Coin app</a></li>
                <li><a href="#">Coin web</a></li>
                <li><a href="#">Transaction</a></li>
                
            </div>
        </div>

       </div>
     );
}

export default Ticket;