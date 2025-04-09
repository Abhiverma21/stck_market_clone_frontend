import React from 'react';
import  {Link } from 'react-router-dom';
import '../index.css';
function Navbar() {
    let styles ={backgroundColor:"White", height:"65px"};
    return (  
        <nav class="navbar fixed-top navbar-expand-lg border" style={styles}>
        <div class="container-fluid" style={{backgroundColor:"white"}}>
            <div className='col-3 text-center'>
          <Link class="navbar-brand " to={'/'}>
            
            <img src="media/images/logo.svg" alt="Logo" style={{width: '40%'}} className='col-md-6 col-lg-4'/>
          </Link></div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div className='col-5'></div>
                <div className='col-5'>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li class="nav-item p-2 mx-2 item">
                                <Link class="nav-link active "to={'/signup'}>SignUp</Link>
                            </li>
                            <li class="nav-item p-2 mx-2">
                                <Link class="nav-link active" to={'/about'}>About</Link>
                            </li>
                            <li class="nav-item p-2 mx-2">
                                <Link class="nav-link active" to={'/products'}>Product</Link>
                            </li>
                            <li class="nav-item p-2 mx-2">
                                <Link class="nav-link active" to={'/pricing'}>Pricing</Link>
                            </li>
                            <li class="nav-item p-2 mx-2">
                                <Link class="nav-link active" to={'/support'}>Support</Link>
                            </li>
                            <li class="nav-item p-3 burger">
                            <i class="fa-solid fa-bars nav-link active"></i>
                            </li>
                            
                            </ul>
            
                </div>
                

           
            
          
          </div>
        </div>
        <hr/>
      </nav>
      
    );
}

export default Navbar;