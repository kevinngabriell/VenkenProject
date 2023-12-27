import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import generalStyle from '../General.css';
import PurchasingMenuSection from './PurchasingMenuSection';
import DashboardTop from '../DashboardTop';
import cocoaImages from '../Assets/cocoa.jpeg';

function PurchasingIndex(){
    let navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
      
        if (selectedOption === 'create-import') {
          // Assuming navigate is a function that performs navigation
          navigate('/purchasing/purchasingImportForm');
        }
      };
      

    return (
        <div className='container'>
            <div className='menu-section'>
                <PurchasingMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='top-module'>
                        <div className='dashboard-title'>Purchasing Module</div>
                            {/* <label htmlFor="dropdown">Select an option:</label> */}
                        <select id="dropdown" value={selectedValue} onChange={handleDropdownChange} className='create-button'>
                            <option value="create">Create Form</option>
                            <option value="create-import">Create New PO Import</option>
                            <option value="create-local">Create New PO Local</option>
                        </select>
                            {/* Display the selected value
                            {selectedValue && <p>You selected: {selectedValue}</p>} */}
                    </div>
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>Overview</div>
                        </div>
                        <div className='overview-items-cards'>
                            <div className='overview-cards-1'>
                                <div className='card-title'>Order In Transit</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-1'>
                                <div className='card-title'>Top Item</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-1'>
                                <div className='card-title'>Top Item</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-1'>
                                <div className='card-title'>Top Item</div>
                                <div className='card-number'>12</div>
                            </div>
                        </div>
                    </div>
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>Items in Port</div>
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
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>Items in Transit (Local)</div>
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
}

export default PurchasingIndex;