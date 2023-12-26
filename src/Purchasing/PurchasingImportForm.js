import React, { useState }  from 'react';
import generalStyle from '../General.css';
import { useNavigate } from 'react-router-dom';
import PurchasingMenuSection from './PurchasingMenuSection';
import DashboardTop from '../DashboardTop';

function PurchasingImportForm(){
    let navigate = useNavigate();

    return(
        <div className='container'>
            <div className='menu-section'>
                <PurchasingMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='dashboard-title'>Purchasing Module</div>
                    
                </div>
            </div>
        </div>
    );
}

export default PurchasingImportForm;