import React, { useState }  from 'react';
import SettingMenuSection from './SettingMenuSection';
import DashboardTop from '../DashboardTop';

function CompanyIndex(){
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
                        <div className='card-title-module'>
                            <div>
                                <div className='overview-title'>Customer</div>
                            </div>
                            <div>
                                <div className='create-button-setting'>Add Customer +</div>
                            </div>
                        </div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20px' }}>No</th>
                                    <th>Nama Customer</th>
                                    <th>Alamat</th>
                                    <th>No Telp</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyIndex;