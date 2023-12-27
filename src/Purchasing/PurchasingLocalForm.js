import React, { useState }  from 'react';
import generalStyle from '../General.css';
import DashboardTop from '../DashboardTop';
import PurchasingMenuSection from './PurchasingMenuSection';
import { useNavigate } from 'react-router-dom';
import ExportFormButton from '../Button/ExportFormButton';
import UpdateStatusFormButton from '../Button/UpdateStatusButton';
import UpdateDataFormButton from '../Button/UpdateDataFormButton';
import SubmitFormButton from '../Button/SubmitFormButton';
import paperIcon from '../Assets/Icon/Paper.png';
import downloadIcon from '../Assets/Icon/Download.png';
import deleteIcon from '../Assets/Icon/DeleteAction.png';

function PurchasingLocalForm(){
    let navigate = useNavigate();

    const [selectedCustomerValue, setselectedCustomerValue] = useState('');
    const [selectedPaymentValue, setselectedPaymentValue] = useState('');
    const [selectedShipmentValue, setselectedShipmentValue] = useState('');

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

    const handleDropdownPaymentChange = (event) => {
        const selectedPaymentOption = event.target.value;
        setselectedPaymentValue(selectedPaymentOption);
    };

    const formatCurrency = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(value);

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
                            <div className='overview-title'>Purchase Order Local</div>
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
                                <div className='form-label'>Delivery</div>
                                <select id="dropdown" value={selectedShipmentValue} onChange={handleDropdownShipmentChange} className='general-dropdown'>
                                    <option value="cust-0">Select Shipment</option>
                                    <option value="cust-1">Shipment A</option>
                                    <option value="cust-2">Shipment B</option>
                                    <option value="cust-3">Shipment C</option>
                                    <option value="cust-4">Shipment D</option>
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
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Invoice Under :</div>
                                <div className='form-mention-address'>
                                    PT. Venken International Kimia <br />
                                    Jl. Raya Kelapa Puan Blok AG 1/7 <br />
                                    Kec. Curug - Kabupaten Tangerang <br />
                                    Indonesia
                                </div>
                            </div>
                            <div style={{ justifyItems: 'end' }}>
                                <div className='form-label'>Delivery Address</div>
                                <div className='form-delivery-address'>
                                    Pergudangan Taman Tekno <br />
                                    Sektor IX Blok K3 No. 47, BSD - Tangerang<br />
                                    Telp : 021-75880017
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
};

export default PurchasingLocalForm;