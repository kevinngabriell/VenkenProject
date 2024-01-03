import logoutIcon from '../Assets/Icon/Logout.png';
import settingActive from '../Assets/Icon/SettingActive.png';
import dashboardInactive from '../Assets/Icon/DashboardInactive.png';
import salesInactive from '../Assets/Icon/SalesInactive.png';
import purchasingInactive from '../Assets/Icon/PurchasingInactive.png';
import financeInactive from '../Assets/Icon/FinanceInactive.png';
import warehouseInactive from '../Assets/Icon/WarehouseInactive.png';
import hrInactive from '../Assets/Icon/HRInactive.png';
import analyticsInactive from '../Assets/Icon/AnalyticsInactive.png';
import documentInactive from '../Assets/Icon/DocumentInactive.png';
import { useNavigate } from 'react-router-dom';
import React, { useState }  from 'react';

function SettingMenuSection(){
    let navigate = useNavigate();

    return(
        <div className='menu-section'>
            <ul className='first-menu'>
                <li> 
                    <div className="menu-item" onClick={() => navigate('/dashboard')}>
                        <img src={dashboardInactive} alt='icon' />
                        <p className="menu-item-text">Dashboard</p>
                    </div>    
                </li>
                <li>
                        <div className="menu-item" onClick={() => navigate('/sales/salesIndex')}>
                            <img src={salesInactive} alt='icon' />
                            <p className="menu-item-text">Sales</p>
                        </div>
                    </li>  
                    <li>
                        <div className="menu-item" onClick={() => navigate('/purchasing/purchasingIndex')}>
                            <img src={purchasingInactive} alt='icon' />
                            <p className="menu-item-text">Purchasing</p>
                        </div>

                    </li>  
                    <li>
                        <div className="menu-item">
                            <img src={financeInactive} alt='icon' />
                            <p className="menu-item-text">Finance</p>
                        </div>
                    </li>  
                    <li>
                        <div className="menu-item">
                            <img src={warehouseInactive} alt='icon' />
                            <p className="menu-item-text">Warehouse</p>
                        </div>
                    </li> 
                    <li>
                        <div className="menu-item">
                            <img src={hrInactive} alt='icon' />
                            <p className="menu-item-text">HR</p>
                        </div>
                    </li> 
                    <li>
                        <div className="menu-item">
                            <img src={analyticsInactive} alt='icon' />
                            <p className="menu-item-text">Analytics</p>
                        </div>
                    </li> 
                    <li>
                        <div className="menu-item">
                            <img src={documentInactive} alt='icon' />
                            <p className="menu-item-text">Document</p>
                        </div>
                    </li>  
                </ul>
                <div className='divider'>
                </div>
                <ul className='secondary-menu'>
                    <li>
                        <div className="menu-item-active" onClick={() => navigate('/setting/settingIndex')}>
                            <img src={settingActive} alt='icon' />
                            <p className="menu-item-text-active">Settings</p>
                        </div>
                    </li>    
                    <li>
                        <div className="menu-item" onClick={() => navigate('/')}>
                            <img src={logoutIcon} alt="icon" />
                            <p className="menu-item-text-logout">Logout</p>
                        </div>
                    </li>   
                </ul>  
            </div>
    );
};

export default SettingMenuSection;