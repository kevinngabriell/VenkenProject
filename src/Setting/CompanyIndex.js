import React, { useState }  from 'react';
import SettingMenuSection from './SettingMenuSection';
import DashboardTop from '../DashboardTop';
import UpdateDataFormButton from '../Button/UpdateDataFormButton';
import SubmitFormButton from '../Button/SubmitFormButton';

function CompanyIndex(){
    const [selectedCustomerValue, setselectedCustomerValue] = useState('');

    const handleDropdownCustomerChange = (event) => {
        const selectedOption = event.target.value;
        setselectedCustomerValue(selectedOption);
    };

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
                                <div className='overview-title'>Company</div>
                            </div>
                        </div>
                        <div className='overview-container-split-2-setting'>
                            <div className='overview-container'>
                                <div>
                                    <div className='form-label'>Company Name</div>
                                    <div className="product-form-input">
                                        <input type="text" value="PT. Demo Company" readOnly/>
                                    </div>
                                </div>            
                                <div>
                                    <div className='form-label'>Company Website</div>
                                    <div className="product-form-input">
                                        <input type="text" value="www.DemoCompany.id" readOnly/>
                                    </div>
                                </div>   
                                <div>
                                    <div className='form-label'>Company Address</div>
                                    <textarea className="product-form-input" value={"Jalan Sudirman Raya Nomor 40B\nJakarta Barat, DKI Jakarta\nIndonesia"} readOnly></textarea>
                                </div>               
                            </div>
                            <div className='overview-container'>
                                <div>
                                    <div className='form-label'>Company Phone Number</div>
                                    <div className="product-form-input">
                                        <input type="text" value="(021)-1111-0000" readOnly/>
                                    </div>
                                </div>      
                                <div>
                                    <div className='form-label'>Company Email</div>
                                    <div className="product-form-input">
                                        <input type="text" value="(021)-1111-0000" readOnly/>
                                    </div>
                                </div>     
                                <div>
                                    <div className='form-label'>Company Industry</div>
                                    <textarea className="product-form-input" value={"Jalan Sudirman Raya Nomor 40B\nJakarta Barat, DKI Jakarta\nIndonesia"} readOnly></textarea>
                                </div>                                
                            </div>
                        </div>
                        <div className='card-title-module'>
                            <div>
                                <div className='overview-title'>Company Target Setting</div>
                            </div>
                        </div>
                        <div className='overview-container'>
                            <div className='set-target-module'>
                                <div>
                                    <div className='form-label'>2024</div>
                                </div>
                                <div>
                                    <select id="dropdown" value={selectedCustomerValue} onChange={handleDropdownCustomerChange} className='general-dropdown'>
                                        <option value="cust-0">Select Currency</option>
                                        <option value="cust-1">USD</option>
                                        <option value="cust-2">IDR</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="product-form-input">
                                        <input type="text" value="PT. Demo Company" readOnly/>
                                    </div>
                                </div>
                            </div>
                            <div className='card-title-module'>
                                <div>
                                    <div className='form-label'>2025</div>
                                </div>
                                <div>
                                    <div className='see-all' >see all</div>
                                </div>
                            </div>
                            <div className='card-title-module'>
                                <div>
                                    <div className='form-label'>2026</div>
                                </div>
                                <div>
                                    <div className='see-all' >see all</div>
                                </div>
                            </div>
                            <div className='card-title-module'>
                                <div>
                                    <div className='form-label'>2027</div>
                                </div>
                                <div>
                                    <div className='see-all' >see all</div>
                                </div>
                            </div>
                            <div className='card-title-module'>
                                <div>
                                    <div className='form-label'>2028</div>
                                </div>
                                <div>
                                    <div className='see-all' >see all</div>
                                </div>
                            </div>
                            <div className='card-title-module'>
                                <div>
                                    <div className='form-label'>2029</div>
                                </div>
                                <div>
                                    <div className='see-all' >see all</div>
                                </div>
                            </div>
                            <div className='card-title-module'>
                                <div>
                                    <div className='form-label'>2030</div>
                                </div>
                                <div>
                                    <div className='see-all' >see all</div>
                                </div>
                            </div>
                        </div>
                        <div className='buttons-grid'>
                            <UpdateDataFormButton/>
                            <SubmitFormButton/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyIndex;