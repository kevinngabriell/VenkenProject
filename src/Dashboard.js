import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import logoutIcon from './Assets/Icon/Logout.png';
import settingInactive from './Assets/Icon/SettingInactive.png';
import dashboardActive from './Assets/Icon/DashboardActive.png';
import salesInactive from './Assets/Icon/SalesInactive.png';
import purchasingIncative from './Assets/Icon/PurchasingInactive.png';
import financeInactive from './Assets/Icon/FinanceInactive.png';
import warehouseInactive from './Assets/Icon/WarehouseInactive.png';
import hrInactive from './Assets/Icon/HRInactive.png';
import analyticsInactive from './Assets/Icon/AnalyticsInactive.png';
import documentInactive from './Assets/Icon/DocumentInactive.png';
import {Chart, ArcElement, CategoryScale, LinearScale, BarController, BarElement} from 'chart.js';
Chart.register(ArcElement, CategoryScale, LinearScale, BarController, BarElement);


const data = { 
    labels: ['62% sales by ABC Product', '62% sales by ABC Product', '62% sales by ABC Product'], 
    datasets: [ 
        { 
            data: [300, 50, 100], 
            backgroundColor: ['rgba(42, 133, 255, 1)', 'rgba(255, 184, 0, 1)', 'rgba(255, 188, 153, 1)'], 
            hoverBackgroundColor: ['rgba(42, 133, 255, 1)', 'rgba(255, 184, 0, 1)', 'rgba(255, 188, 153, 1)'] 
        } 
    ] 
};

const Bardata = { 
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'], 
    datasets: [ 
        { 
            label: 'My First dataset', 
            data: [200, 150, 130, 180, 210, 190, 210, 110, 100, 170, 190, 200], 
            backgroundColor: [ 'rgba(181, 228, 202, 1)', 'rgba(181, 228, 202, 1)', 'rgba(181, 228, 202, 1)', 'rgba(181, 228, 202, 1)', 'rgba(181, 228, 202, 1)', 'rgba(181, 228, 202, 1)', ], 
        }, 
    ], 
};

const Baroptions = { 
    indexAxis: 'x',
    responsive: true, 
    plugins: { 
        title: { 
            display: true, 
            text: 'Bar Chart', 
        }, 
    }, 
};

function Dashboard(){
    let navigate = useNavigate();

    return (
        <div className='container'>
            <div className='menu-section'>
                <ul className='first-menu'>
                    <li> 
                        <div className="menu-item-active">
                            <img src={dashboardActive} alt='icon' />
                            <p className="menu-item-text-active">Dashboard</p>
                        </div>    
                    </li>
                    <li>
                        <div className="menu-item">
                            <img src={salesInactive} alt='icon' />
                            <p className="menu-item-text">Sales</p>
                        </div>
                    </li>  
                    <li>
                        <div className="menu-item" onClick={() => navigate('/purchasing/purchasingIndex')}>
                            <img src={purchasingIncative} alt='icon' />
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
            </div>
            <div className='dashboard-section'>

            </div>
            ffff
        </div>
    );
}

export default Dashboard;