import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import generalStyle from './General.css';
import loginStyle from './Login/Login.css';
import dashboardStyle from './DashboardStyle.css';
import {Chart, ArcElement, CategoryScale, LinearScale, BarController, BarElement} from 'chart.js';
import { Pie, Doughnut, Bar } from 'react-chartjs-2';
import DashboardMenuSection from './DashboardMenuSection';
import DashboardTop from './DashboardTop';
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
                <DashboardMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='dashboard-title'>Dashboard</div>
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>Overview</div>
                        </div>
                        <div className='overview-items-cards'>
                            <div className='overview-cards-1'>
                                <div className='card-title'>Attandance</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-2'>
                                <div className='card-title'>Late</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-3'>
                                <div className='card-title'>Absent</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-4'>
                                <div className='card-title'>Remaining Leave</div>
                                <div className='card-number'>12</div>
                            </div>
                        </div>
                    </div>
                    <div className='chart-container'>
                        <div className='top-product-container'>
                            <div className='overview-items'>
                                <div className='card-title-chart'>Top Product by Sales</div>
                                <div className='dought-chart'>
                                    <Doughnut data={data} />
                                </div>
                                <div className='dough-chart'>
                                    <div className='dough-label'>
                                        {data.labels.map((label, index) => (
                                        <div key={index} className="data-label">
                                            <div 
                                            className="color-box"
                                            style={{backgroundColor: data.datasets[0].backgroundColor[index]}} 
                                            />
                                            <div className="label-text">
                                                {label}
                                            </div>
                                        </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='sales-bar-container'>
                            <div className='overview-items'>
                                <div className='card-title-chart'>Sales in a year</div>
                                <div className='bar-chart'>
                                    <Bar data={Bardata} options={Baroptions} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;