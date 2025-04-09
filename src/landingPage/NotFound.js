
import React from 'react';
import {Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function NotFound() {
    return ( 
        <>
        <Navbar />
        <div className='container mt-5 p-5 '>
            <div className='row text-center'>
                 <h1 className='mb-4 fs-2'>404 Not Found</h1>
                 <p className='mb-3'>Sorry the page you are looking for does not exist</p>
                 <button className='p-2 btn btn-primary mt-3 fs-5'style={{width:"20%", margin:"0 auto" }}>
                    <Link to="/" style={{color:"white"}}>Go Back Home</Link>
                 </button>

            </div>
            <br/><br/><br/><br/>
        <Footer />

    
       

        </div>
        </>
     );
}

export default NotFound;