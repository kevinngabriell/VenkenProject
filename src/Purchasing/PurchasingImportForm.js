import React, { useState }  from 'react';
import generalStyle from '../General.css';
import { useNavigate } from 'react-router-dom';
import PurchasingMenuSection from './PurchasingMenuSection';
import DashboardTop from '../DashboardTop';
import DatePicker from 'react-datepicker';


function PurchasingImportForm(){
    let navigate = useNavigate();
   
    const [selectedCustomerValue, setselectedCustomerValue] = useState('');
    const [selectedShipmentValue, setselectedShipmentValue] = useState('');
    const [selectedTermValue, setselectedTermValue] = useState('');
    const [selectedPaymentValue, setselectedPaymentValue] = useState('');

    const handleDropdownCustomerChange = (event) => {
        const selectedOption = event.target.value;
        setselectedCustomerValue(selectedOption);
      
        if (selectedOption === 'create-import') {
          // Assuming navigate is a function that performs navigation
          navigate('/purchasing/purchasingImportForm');
        }
    };

    const handleDropdownShipmentChange = (event) => {
        const selectedShipmentOption = event.target.value;
        setselectedShipmentValue(selectedShipmentOption);
      
        if (selectedShipmentOption === 'create-import') {
          // Assuming navigate is a function that performs navigation
          navigate('/purchasing/purchasingImportForm');
        }
    };

    const handleDropdownTermChange = (event) => {
        const selectedTermOption = event.target.value;
        setselectedTermValue(selectedTermOption);
      
        if (selectedTermOption === 'create-import') {
          // Assuming navigate is a function that performs navigation
          navigate('/purchasing/purchasingImportForm');
        }
    };

    const handleDropdownPaymentChange = (event) => {
        const selectedPaymentOption = event.target.value;
        setselectedPaymentValue(selectedPaymentOption);
    };

    const data = [
        { no: 1, productname: 'Cocoa', quantity: 3, packagingsize: 'Kg', unitprice: 1000000, total: '' },
        { no: 2, productname: 'Milk', quantity: 10, packagingsize: 'Kg', unitprice: 1000000, total: '' },
        { no: 3, productname: 'Butter', quantity: 25, packagingsize: 'Kg', unitprice: 1000000, total: '' },
      ];

    const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
    return(
        <div className='container'>
            <div className='menu-section'>
                <PurchasingMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='dashboard-title'>Purchasing Module</div>
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>Purchase Order Import</div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Purchase Order Number</div>
                                <div className='autofill-form-label'>#24122178</div>
                            </div>
                            <div>
                                <div className='form-label'>Date</div>
                                
                            </div>
                            <div>
                                <div className='form-label'>To</div>
                                <select id="dropdown" value={selectedCustomerValue} onChange={handleDropdownCustomerChange} className='general-dropdown'>
                                    <option value="cust-0">Select Customer</option>
                                    <option value="cust-1">PT. A</option>
                                    <option value="cust-2">PT. B</option>
                                    <option value="cust-3">PT. C</option>
                                    <option value="cust-4">PT. D</option>
                                </select>
                            </div>
                        </div>
                        <div className='overview-items'>
                            <div className='overview-title'>Attn</div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Shipment</div>
                                <select id="dropdown" value={selectedShipmentValue} onChange={handleDropdownShipmentChange} className='general-dropdown'>
                                    <option value="cust-0">Select Shipment</option>
                                    <option value="cust-1">Shipment A</option>
                                    <option value="cust-2">Shipment B</option>
                                    <option value="cust-3">Shipment C</option>
                                    <option value="cust-4">Shipment D</option>
                                </select>
                            </div>
                            <div>
                                <div className='form-label'>Term</div>
                                <select id="dropdown" value={selectedTermValue} onChange={handleDropdownTermChange} className='general-dropdown'>
                                    <option value="cust-0">Select Term</option>
                                    <option value="cust-1">Term A</option>
                                    <option value="cust-2">Term B</option>
                                    <option value="cust-3">Term C</option>
                                    <option value="cust-4">Term D</option>
                                </select>
                            </div>
                            <div>
                                <div className='form-label'>Payment</div>
                                <select id="dropdown" value={selectedPaymentValue} onChange={handleDropdownPaymentChange} className='general-dropdown'>
                                    <option value="cust-0">Select Payment</option>
                                    <option value="cust-1">Payment A</option>
                                    <option value="cust-2">Payment B</option>
                                    <option value="cust-3">Payment C</option>
                                    <option value="cust-4">Payment D</option>
                                </select>
                            </div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Search Product</div>
                                <div className="product-form-input">
                                    <input type="text" placeholder="Browse Product"/>
                                </div>
                            </div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <table className="data-table">
                                    <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Product Name</th>
                                        <th>Quantity</th>
                                        <th>Packaging Size</th>
                                        <th>Unit Price</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((row) => (
                                        <tr key={row.no}>
                                            <td className="table-center">{row.no}</td>
                                            <td>{row.productname}</td>
                                            <td className="table-center">{row.quantity}</td>
                                            <td className="table-center">{row.packagingsize}</td>
                                            <td className="table-center">{formatCurrency(row.unitprice)}</td>
                                            <td className="table-center">{formatCurrency(row.quantity * row.unitprice)}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PurchasingImportForm;