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

function ReadOnlyLocal(){
    const data = [
        { no: 1, productname: 'Cocoa', quantity: 3, packagingsize: 'Kg', unitprice: 1000000, total: '' },
        { no: 2, productname: 'Milk', quantity: 10, packagingsize: 'Kg', unitprice: 1000000, total: '' },
        { no: 3, productname: 'Butter', quantity: 25, packagingsize: 'Kg', unitprice: 1000000, total: '' },
    ];
    
    const [QuantityData, setData] = useState(data);

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
                                <div className='autofill-form-label'>#24122178</div>
                            </div>
                            <div>
                                <div className='form-label'>To</div>
                                <div className='autofill-form-label'>#24122178</div>
                            </div>
                        </div>
                        <div className='overview-items'>
                            <div className='overview-title'>Attn</div>
                        </div>
                        <div className='form-grid-container'>
                            <div>
                                <div className='form-label'>Delivery</div>
                                <div className='autofill-form-label'>#24122178</div>
                            </div>
                            <div>
                                <div className='form-label'>Payment</div>
                                <div className='autofill-form-label'>#24122178</div>
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
                                </tr>
                            </thead>
                            <tbody>
                                {QuantityData.map((row, index) => (
                                    <tr key={row.no}>
                                        <td className="table-center">{row.no}</td>
                                        <td>{row.productname}</td>
                                        <td className="table-center">
                                            <input type="number" value={row.quantity} className='quantity-input'/>
                                        </td>
                                        <td className="table-center">{row.packagingsize}</td>
                                        <td className="table-center">{formatCurrency(row.unitprice)}</td>
                                        <td className="table-center">{formatCurrency(row.quantity * row.unitprice)}</td>
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

export default ReadOnlyLocal;