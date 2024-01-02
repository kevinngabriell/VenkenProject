import React, { useState }  from 'react';
import DashboardTop from '../DashboardTop';
import generalStyle from '../General.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SalesMenuSection from './SalesMenuSection';

function SalesNewSPPB(){
    let navigate = useNavigate();

    return(
        <div className='container'>
            <div className='menu-section'>
                <SalesMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='dashboard-title'>Sales Module</div>
                </div>
            </div>
        </div>
    );
};

export default SalesNewSPPB;