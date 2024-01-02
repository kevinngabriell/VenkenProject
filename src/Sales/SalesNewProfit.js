import React, { useState }  from 'react';
import generalStyle from '../General.css';
import { useNavigate } from 'react-router-dom';
import DashboardTop from '../DashboardTop';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ExportFormButton from '../Button/ExportFormButton';
import UpdateStatusFormButton from '../Button/UpdateStatusButton';
import UpdateDataFormButton from '../Button/UpdateDataFormButton';
import SubmitFormButton from '../Button/SubmitFormButton';
import SalesMenuSection from './SalesMenuSection';

function SalesNewProfit(){
    let navigate = useNavigate();
   
    const [selectedCustomerValue, setselectedCustomerValue] = useState('');

    const handleDropdownCustomerChange = (event) => {
        const selectedOption = event.target.value;
        setselectedCustomerValue(selectedOption);
    };

    return(
        <div className='container'>
            <div className='menu-section'>
                <SalesMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='dashboard-title'>Sales Module</div>
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>New Profit</div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Sales Order Number</div>
                                <div className='autofill-form-label'>#24122178</div>
                            </div>
                            <div>
                                <div className='form-label'>Customer</div>
                                <select id="dropdown" value={selectedCustomerValue} onChange={handleDropdownCustomerChange} className='general-dropdown'>
                                    <option value="cust-0">Select Customer</option>
                                    <option value="cust-1">PT. A</option>
                                    <option value="cust-2">PT. B</option>
                                    <option value="cust-3">PT. C</option>
                                    <option value="cust-4">PT. D</option>
                                </select>
                            </div>
                        </div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20px' }}>No</th>
                                    <th style={{ width: '242px' }}>Product Name</th>
                                    <th style={{ width: '82px' }}>Quantity</th>
                                    <th>Harga Jual Satuan</th>
                                    <th>Landed Cost</th>
                                    <th>Profit</th>
                                    <th>Profit %</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2">Total</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                    <td>a</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className='buttons-grid'>
                            <ExportFormButton/>
                            <UpdateStatusFormButton/>
                            <UpdateDataFormButton/>
                            <SubmitFormButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesNewProfit;