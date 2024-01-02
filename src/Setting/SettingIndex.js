import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import generalStyle from '../General.css';
import SettingMenuSection from './SettingMenuSection';
import DashboardTop from '../DashboardTop';
import CustomerIcon from '../Assets/Icon/Customer.png';
import ShippingIcon from '../Assets/Icon/Shipping.png';
import PaymentIcon from '../Assets/Icon/Payment.png';
import TermIcon from '../Assets/Icon/Term.png';

function SettingIndex(){
    return(
        <div className='container'>
            <div className='menu-section'>
                <SettingMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='top-module'>
                        <div className='dashboard-title'>Setting Module</div>
                    </div>
                    <div className='overview-container'>
                        <div className='settings-grid-system'>
                            <div className='setting-box'>
                                <img src={CustomerIcon} alt='icon' />
                                Customer
                            </div>
                            <div className='setting-box'>
                                Shipping
                            </div>
                            <div className='setting-box'>
                                Payment
                            </div>
                            <div className='setting-box'>
                                Term
                            </div>
                        </div>
                        <div className='settings-grid-system'>
                            <div className='setting-box'>
                                Product
                            </div>
                            <div className='setting-box'>
                                Packaging
                            </div>
                            <div className='setting-box'>
                                Origin
                            </div>
                            <div className='setting-box'>
                                Company
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingIndex;