import React, { useState }  from 'react';
import SalesMenuSection from './SalesMenuSection';
import DashboardTop from '../DashboardTop';
import generalStyle from '../General.css';
import DatePicker from 'react-datepicker';
import ExportFormButton from '../Button/ExportFormButton';
import UpdateStatusFormButton from '../Button/UpdateStatusButton';
import UpdateDataFormButton from '../Button/UpdateDataFormButton';
import SubmitFormButton from '../Button/SubmitFormButton';
import 'react-datepicker/dist/react-datepicker.css';

function SalesNewSO(){

    const [date, setDate] = useState(new Date());
    const [KirimTgldate, setKirimTglDate] = useState(new Date());
    const [KirimKedate, setKirimKeDate] = useState(new Date());
    const [selectedPPNValue, setselectedPPNValue] = useState('');
    const [selectedCustomerValue, setselectedCustomerValue] = useState('');
    const [selectedPOValue, setselectedPOValue] = useState('');

    const handleDropdownPPNChange = (event) => {
        const selectedOption = event.target.value;
        setselectedPPNValue(selectedOption);
    };

    const handleDropdownCustomerChange = (event) => {
        const selectedOption = event.target.value;
        setselectedCustomerValue(selectedOption);
    };

    const handleDropdownPOChange = (event) => {
        const selectedOption = event.target.value;
        setselectedPOValue(selectedOption);
    };

    const data = [
        { no: 1, productname: 'Cocoa', quantity: 3, packagingsize: 'Kg', unitprice: 1000000, currency: '', total: '' },
        { no: 2, productname: 'Milk', quantity: 10, packagingsize: 'Kg', unitprice: 1000000, currency: '', total: '' },
        { no: 3, productname: 'Butter', quantity: 25, packagingsize: 'Kg', unitprice: 1000000, currency: '', total: '' },
    ];

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
                            <div className='overview-title'>New Sales Order</div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Sales Order Number</div>
                                <div className='autofill-form-label'>#24122178</div>
                            </div>
                            <div>
                                <div className='form-label'>Date</div>
                                <DatePicker className='general-dropdown' selected={date} onChange={(date) => setDate(date)} />
                            </div>
                            <div>
                                <div className='form-label'>PPN/ NO.PPN</div>
                                <select id="dropdown" value={selectedPPNValue} onChange={handleDropdownPPNChange} className='general-dropdown'>
                                    <option value="PPN-0">Select PPN</option>
                                    <option value="PPN-1">NPWP</option>
                                    <option value="PPN-2">NON-NPWP</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Customer</div>
                                <select id="dropdown" value={selectedCustomerValue} onChange={handleDropdownCustomerChange} className='general-dropdown'>
                                    <option value="Cust-0">Select Customer</option>
                                    <option value="Cust-1">PT. A</option>
                                    <option value="Cust-2">PT. B</option>
                                </select>
                            </div>
                            <div>
                                <div className='form-label'>Alamat</div>
                                <select id="dropdown" value={selectedCustomerValue} onChange={handleDropdownCustomerChange} className='general-dropdown'>
                                    <option value="Cust-0">Select Customer</option>
                                    <option value="Cust-1">PT. A</option>
                                    <option value="Cust-2">PT. B</option>
                                </select>
                            </div>
                            <div>
                                <div className='form-label'>No. PO</div>
                                <select id="dropdown" value={selectedPOValue} onChange={handleDropdownPOChange} className='general-dropdown'>
                                    <option value="Cust-0">Select No PO</option>
                                    <option value="Cust-1">PO 1</option>
                                    <option value="Cust-2">PO 2</option>
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
                                    <th style={{ width: '242px' }}>Product Name</th>
                                    <th>QTY</th>
                                    <th>SAT</th>
                                    <th>Curr</th>
                                    <th>Harga@</th>
                                    <th>Total</th>
                                    <th>Kurs</th>
                                    <th>DPP</th>
                                    <th>PPN</th>
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
                                    <td>a</td>
                                    <td>a</td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colSpan="2"></td>
                                    <td>a</td>
                                    <td colSpan="2"></td>
                                    <td>a</td>
                                    <td>Total</td>
                                    <td colSpan="1"></td>
                                    <td>a</td>
                                    <td>a</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Dikirim Tanggal : </div>
                                <DatePicker className='general-dropdown' selected={KirimTgldate} onChange={(date) => setKirimTglDate(date)} />
                            </div>
                            <div>
                                <div className='form-label'>Dikirim Ke : </div>
                                <DatePicker className='general-dropdown' selected={KirimKedate} onChange={(date) => setKirimKeDate(date)} />
                            </div>
                        </div>
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

export default SalesNewSO;