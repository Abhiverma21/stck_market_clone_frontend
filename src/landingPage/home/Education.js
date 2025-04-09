
import React from 'react';
function Education() {
    return ( 
        <div className='contianer p-5'>
            <div className='row'>
                <div className='col-5 text-xs p-5'>
                    <h1 style={{fontSize:"35px"}}>Trust with confidence</h1>
                    <h3 className='p-1 fs-4 mt-5' style={{fontSize:"25px"}}>Customer-first always</h3>
                    <p className='fs-6 '>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    
                    <h3 className=' fs-4 mt-5'>No spam or gimmicks</h3>
                    <p className=' fs-6 '>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h3 className=' fs-4 mt-5 '>The Zerodha universe</h3>
                    <p className=' fs-6 '>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='fs-4 mt-5'>Do better with money</h3>
                    <p className=' fs-6 '>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.

                    </p>
                </div>
                <div className='col-7'>
                    <img src='media/images/ecosystem.png' style={{width:"90%"}}></img>
                    <div className='text-center p-4'>
                    <a href='#' className='mx-5'style={{textDecoration:"none"}}>Explore Products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href='#' style={{textDecoration:"none"}} >Try kite demo <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;