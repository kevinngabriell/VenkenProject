import React, { useState }  from 'react';
import generalStyle from '../General.css';
import { useNavigate } from 'react-router-dom';
import PurchasingMenuSection from './PurchasingMenuSection';
import DashboardTop from '../DashboardTop';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import paperIcon from '../Assets/Icon/Paper.png';
import downloadIcon from '../Assets/Icon/Download.png';
import FormButton from '../Button/ExportFormButton';
import ExportFormButton from '../Button/ExportFormButton';
import UpdateStatusFormButton from '../Button/UpdateStatusButton';
import UpdateDataFormButton from '../Button/UpdateDataFormButton';
import SubmitFormButton from '../Button/SubmitFormButton';
import deleteIcon from '../Assets/Icon/DeleteAction.png';

function PurchasingImportForm(){
    let navigate = useNavigate();
   
    const [selectedCustomerValue, setselectedCustomerValue] = useState('');
    const [selectedShipmentValue, setselectedShipmentValue] = useState('');
    const [selectedTermValue, setselectedTermValue] = useState('');
    const [selectedPaymentValue, setselectedPaymentValue] = useState('');
    const [selectedOriginValue, setselectedOriginValue] = useState('');
    const [date, setDate] = useState(new Date());

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

    const handleDropdownOriginChange = (event) => {
        const selectedOriginOption = event.target.value;
        setselectedOriginValue(selectedOriginOption);
    };

    const data = [
        { no: 1, productname: 'Cocoa', quantity: 3, packagingsize: 'Kg', unitprice: 1000000, total: '' },
        { no: 2, productname: 'Milk', quantity: 10, packagingsize: 'Kg', unitprice: 1000000, total: '' },
        { no: 3, productname: 'Butter', quantity: 25, packagingsize: 'Kg', unitprice: 1000000, total: '' },
      ];
      
    const [QuantityData, setData] = useState(data);

    const handleQuantityChange = (index, value) => {
        const updatedData = [...QuantityData];
        updatedData[index].quantity = value;
        setData(updatedData);
        console.log('Updated Data:', updatedData);
    };

    const handleDeleteRow = (index) => {
        const updatedData = [...QuantityData];
        updatedData.splice(index, 1); // Remove the row at the specified index
        setData(updatedData);
      };
    
    const [shippingText, setShippingText] = useState('Shipping marks text');
    const handleTextChange = (event) => {
        setShippingText(event.target.value);
    };

    const [remarksText, setRemarksText] = useState('Remarks text');
    const handleRemarksText = (event) => {
        setRemarksText(event.target.value);
    };

    const formatCurrency = (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);

    const totalQuantity = QuantityData.reduce((acc, row) => acc + row.quantity, 0);
    const totalUnitPrice = QuantityData.reduce((acc, row) => acc + row.unitprice, 0);
    const totalAmount = QuantityData.reduce((acc, row) => acc + row.quantity * row.unitprice, 0);

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
                                <DatePicker className='general-dropdown' selected={date} onChange={(date) => setDate(date)} />
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
                                    <th style={{ width: '82px' }}>Quantity</th>
                                    <th>Packaging Size</th>
                                    <th>Unit Price</th>
                                    <th>Total</th>
                                    <th style={{ width: '20px' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {QuantityData.map((row, index) => (
                                    <tr key={row.no}>
                                            <td className="table-center">{row.no}</td>
                                            <td>{row.productname}</td>
                                            <td className="table-center">
                                            <input
                                                type="number"
                                                value={row.quantity}
                                                className='quantity-input'
                                                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10))}
                                            />
                                            </td>
                                            <td className="table-center">{row.packagingsize}</td>
                                            <td className="table-center">{formatCurrency(row.unitprice)}</td>
                                            <td className="table-center">{formatCurrency(row.quantity * row.unitprice)}</td>
                                            <td className="table-center" onClick={() => handleDeleteRow(index)}>
                                                <img src={deleteIcon} className='delete-action-table'/>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                        <td colSpan="2"></td>
                                        <td className="table-center">
                                            <div className='quantity-input'>
                                                {totalQuantity}
                                            </div>
                                        </td>
                                        <td colSpan="1"></td>
                                        <td className="table-center" colSpan="1">{formatCurrency(totalUnitPrice)}</td>
                                        <td className="table-center">{formatCurrency(totalAmount)}</td>
                                        <td></td>
                                        </tr>
                                    </tfoot>
                        </table>
                        <div className='form-grid-container-2'>
                            <div>
                                <div className='form-label'>Origin</div>
                                <select id="dropdown" value={selectedOriginValue} onChange={handleDropdownOriginChange} className='general-dropdown'>
                                    <option value="cust-0">Select Origin</option>
                                    <option value="cust-1">France</option>
                                    <option value="cust-2">China</option>
                                    <option value="cust-3">Singapore</option>
                                </select>
                            </div>
                            <div>
                                <div className='form-label'>Shipping Marks</div>
                                <textarea
                                    className='general-text-area'
                                    value={shippingText}
                                    onChange={handleTextChange}
                                    rows={4} 
                                    cols={35} 
                                />
                            </div>
                            <div>
                                <div className='form-label'>Remarks</div>
                                <textarea
                                    className='general-text-area'
                                    value={remarksText}
                                    onChange={handleRemarksText}
                                    rows={4} // Set the number of visible text lines
                                    cols={45} // Set the number of visible text columns
                                />
                            </div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Should mention name :</div>
                                <div className='form-mention-address'>
                                    PT. Venken International Kimia <br />
                                    Jl. Raya Kelapa Puan Blok AG 1/7 <br />
                                    Kec. Curug - Kabupaten Tangerang <br />
                                    Indonesia
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>Documents</div>
                        </div>
                        <div className='odd-list-items'>
                            <div>
                                <img src={paperIcon}/>
                            </div>
                            <div>
                                <div className='form-document-name'>Document ABCS</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    <img src={downloadIcon}/>
                                    Download
                                </div>
                            </div>            
                        </div>
                        <div className='even-list-items'>
                            <div>
                                <img src={paperIcon}/>
                            </div>
                            <div>
                                <div className='form-document-name'>Document ABCS</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    <img src={downloadIcon}/>
                                    Download
                                </div>
                            </div>            
                        </div>
                        <div className='odd-list-items'>
                            <div>
                                <img src={paperIcon}/>
                            </div>
                            <div>
                                <div className='form-document-name'>Document ABCS</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    <img src={downloadIcon}/>
                                    Download
                                </div>
                            </div>            
                        </div>
                        <div className='even-list-items'>
                            <div>
                                <img src={paperIcon}/>
                            </div>
                            <div>
                                <div className='form-document-name'>Document ABCS</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    <img src={downloadIcon}/>
                                    Download
                                </div>
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
}

export default PurchasingImportForm;