import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import logoutIcon from './Assets/Icon/Logout.png';
import settingInactive from './Assets/Icon/SettingInactive.png';
import dashboardActive from './Assets/Icon/DashboardActive.png';
import salesInactive from './Assets/Icon/SalesInactive.png';
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
    return (
        <div>ffff</div>
    );
}

export default Dashboard;