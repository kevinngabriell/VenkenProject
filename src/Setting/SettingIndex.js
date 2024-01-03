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
    let navigate = useNavigate();

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
                            <div className='setting-box' onClick={() => navigate('/setting/customerIndex')}>
                                <div>
                                    <img src={CustomerIcon} alt='icon' />
                                </div>
                                Customer
                            </div>
                            <div className='setting-box' onClick={() => navigate('/setting/shippingIndex')}>
                                <div>
                                    <img src={ShippingIcon} alt='icon' />
                                </div>
                                Shipping
                            </div>
                            <div className='setting-box' onClick={() => navigate('/setting/paymentIndex')}>
                                <div>
                                    <img src={PaymentIcon} alt='icon' />
                                </div>
                                Payment
                            </div>
                            <div className='setting-box' onClick={() => navigate('/setting/termIndex')}>
                                <div>
                                    <img src={TermIcon} alt='icon' />
                                </div>
                                Term
                            </div>
                        </div>
                        <div className='settings-grid-system'>
                            <div className='setting-box' onClick={() => navigate('/setting/productIndex')} >
                                <div>
                                    <img src={CustomerIcon} alt='icon' />
                                </div>
                                Product
                            </div>
                            <div className='setting-box' onClick={() => navigate('/setting/packagingIndex')}>
                                <div>
                                    <img src={CustomerIcon} alt='icon' />
                                </div>
                                Packaging
                            </div>
                            <div className='setting-box' onClick={() => navigate('/setting/originIndex')}>
                                <div>
                                    <img src={CustomerIcon} alt='icon' />
                                </div>
                                Origin
                            </div>
                            <div className='setting-box' onClick={() => navigate('/setting/companyIndex')}>
                                <div>
                                    <img src={CustomerIcon} alt='icon' />
                                </div>
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