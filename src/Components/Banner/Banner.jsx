import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
    <div className='ml-4 mr-4'>
        <div className="hero min-h-screen bg-base-500 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h4 className="text-5xl font-bold">One Step <br />Closer To Your <br /><span className='text-green-400'>Dream Job</span></h4>
                <p className="py-6">Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. <br /> Manage all your job application from start to finish.</p>
                <NavLink className="btn btn-primary" to="/" >Get Started</NavLink>

            </div>
        </div>
    </div>
    </div>
    );
};

export default Banner;