import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import generalStyle from '../General.css';
import PurchasingMenuSection from './PurchasingMenuSection';
import DashboardTop from '../DashboardTop';
import cocoaImages from '../Assets/cocoa.jpeg';

function AllPurchaseRecord(){
    let navigate = useNavigate();

    const [selectedMonthValue, setselectedMonthValue] = useState('');
    const [selectedYearValue, setselectedYearValue] = useState('');

    const handleDropdownMonthChange = (event) => {
        const selectedOption = event.target.value;
        setselectedMonthValue(selectedOption);
    };

    const handleDropdownYearChange = (event) => {
        const selectedOption = event.target.value;
        setselectedYearValue(selectedOption);
    };

    return(
        <div className='container'>
            <div className='menu-section'>
                <PurchasingMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='top-module'>
                        <div className='dashboard-title'>All Purchasing Data Record</div>
                    </div>
                    <div className='filter-grid'>
                        <div className='filter-grid-2'>
                            <div>
                                <div className='form-label'>Month</div>
                                <select id="dropdown" value={selectedMonthValue} onChange={handleDropdownMonthChange} className='filter-dropdown'>
                                    <option value="cust-0">Select Month</option>
                                    <option value="cust-1">January</option>
                                    <option value="cust-2">February</option>
                                    <option value="cust-3">May</option>
                                    <option value="cust-4">June</option>
                                </select>
                            </div>
                            <div>
                                <div className='form-label'>Year</div>
                                <select id="dropdown" value={selectedYearValue} onChange={handleDropdownYearChange} className='filter-dropdown'>
                                    <option value="cust-0">Select Year</option>
                                    <option value="cust-1">2024</option>
                                    <option value="cust-2">2025</option>
                                    <option value="cust-3">2026</option>
                                    <option value="cust-4">2027</option>
                                </select>
                            </div>
                            <div>
                                <div className='form-label'>PO Number</div>
                                <div className="PONumber-form-input">
                                    <input type="text" placeholder="#Insert PO Number"/>
                                </div>
                            </div>
                        </div>
                        <div className='filter-export'>
                            <div className='export-excel'>
                                Export to Excel
                            </div>
                        </div>
                    </div>
                    <div className='list-all-items'>
                        <div className='odd-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                        <div className='even-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                        <div className='odd-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                        <div className='even-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                        <div className='odd-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                        <div className='even-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                        <div className='odd-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                        <div className='even-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button'>
                                    Details
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPurchaseRecord;