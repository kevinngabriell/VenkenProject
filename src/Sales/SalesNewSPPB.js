import React, { useState }  from 'react';
import DashboardTop from '../DashboardTop';
import generalStyle from '../General.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import SalesMenuSection from './SalesMenuSection';
import ExportFormButton from '../Button/ExportFormButton';
import UpdateStatusFormButton from '../Button/UpdateStatusButton';
import UpdateDataFormButton from '../Button/UpdateDataFormButton';
import SubmitFormButton from '../Button/SubmitFormButton';

function SalesNewSPPB(){
    let navigate = useNavigate();

    const [date, setDate] = useState(new Date());

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
                            <div className='overview-title'>New Surat Permintaan Pengeluaran Barang</div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>NO. SPPB</div>
                                <div className='autofill-form-label'>#24122178</div>
                            </div>
                            <div>
                                <div className='form-label'>Tanggal</div>
                                <DatePicker className='general-dropdown' selected={date} onChange={(date) => setDate(date)} />
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
                        <div className='form-browse-product'>
                            <div className='form-label'>Search Product</div>
                            <div className="product-form-input">
                                <input type="text" placeholder="Browse Product"/>
                            </div>
                        </div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20px' }}>No</th>
                                    <th style={{ width: '202px' }}>PO Customer</th>
                                    <th style={{ width: '82px' }}>Dikirim ke</th>
                                    <th style={{ width: '100px' }}>Tanggal Kirim</th>
                                    <th style={{ width: '242px' }}>Nama Barang</th>
                                    <th>QTY</th>
                                    <th>SAT</th>
                                    <th style={{ width: '242px' }}>Keterangan</th>
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
                                    <td>a</td>
                                </tr>
                            </tbody>
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

export default SalesNewSPPB;