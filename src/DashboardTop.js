import { useNavigate } from 'react-router-dom';
import React, { useState }  from 'react';

function DashboardTop(){
    return(
        <div className='dashboard-top'>
            <input type='text' placeholder='Search...' className='search-box'/>
            <div className='dashboard-profile'>
                <div className='circle-image' />
                <div className='profile-name'>Kevin Gabriel</div>
            </div>
        </div>
    );
}

export default DashboardTop;