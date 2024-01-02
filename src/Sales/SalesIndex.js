import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import SalesMenuSection from './SalesMenuSection';
import DashboardTop from '../DashboardTop';
import generalStyle from '../General.css';
import cocoaImages from '../Assets/cocoa.jpeg';

function SalesIndex(){
    let navigate = useNavigate();
    const [selectedValue, setSelectedValue] = useState('');

    const handleDropdownChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedValue(selectedOption);
      
        if (selectedOption === 'create-new-so') {
          // Assuming navigate is a function that performs navigation
            navigate('/sales/salesNewSO');
        } else if (selectedOption == 'create-new-sppb'){
            navigate('/sales/salesNewSPPB');
        } else if (selectedOption == 'create-new-profit'){
            navigate('/sales/salesNewProfit');
        }
    };

    return(
        <div className='container'>
            <div className='menu-section'>
                <SalesMenuSection/>
            </div>
            <div className='dashboard-section'>
                <DashboardTop/>
                <div className='dashboard-main'>
                    <div className='top-module'>
                        <div className='dashboard-title'>Sales Module</div>
                        <select id="dropdown" value={selectedValue} onChange={handleDropdownChange} className='create-button'>
                            <option value="create">Create</option>
                            <option value="create-new-so">Create New SO</option>
                            <option value="create-new-sppb">Create New SPPB</option>
                            <option value="create-new-profit">Create New Profit</option>
                        </select>
                    </div>
                    <div className='overview-container'>
                        <div className='overview-items'>
                            <div className='overview-title'>Overview</div>
                        </div>
                        <div className='overview-items-cards'>
                            <div className='overview-cards-1'>
                                <div className='card-title'>Current Sales</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-1'>
                                <div className='card-title'>KPI Target</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-1'>
                                <div className='card-title'>In Transit</div>
                                <div className='card-number'>12</div>
                            </div>
                            <div className='overview-cards-1'>
                                <div className='card-title'>Top Item</div>
                                <div className='card-number'>12</div>
                            </div>
                        </div>
                    </div>
                    <div className='overview-container-split-2'>
                        <div className='overview-container'>
                            <div className='card-title-module'>
                                <div>
                                    <div className='overview-title'>Repeat Order Reminder</div>
                                </div>
                                <div>
                                    <div className='see-all' onClick={() => navigate('/purchasing/allItemsInPort')}>see all</div>
                                </div>
                            </div>
                            <div className='odd-list-items'>
                                <img src={cocoaImages} className='list-images' />
                                <div>
                                    <div className='list-items-text-1'>#52217221</div>
                                    <div className='list-items-text-2'>1 Days</div>
                                </div>
                                <div>
                                    <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                            <div className='card-title-module'>
                                <div>
                                    <div className='overview-title'>Under Negotiation List</div>
                                </div>
                                <div>
                                    <div className='see-all' onClick={() => navigate('/purchasing/allItemsInPort')}>see all</div>
                                </div>
                            </div>
                            <div className='odd-list-items'>
                                <img src={cocoaImages} className='list-images' />
                                <div>
                                    <div className='list-items-text-1'>#52217221</div>
                                    <div className='list-items-text-2'>1 Days</div>
                                </div>
                                <div>
                                    <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                    <div className='overview-container'>
                        <div className='card-title-module'>
                            <div>
                                <div className='overview-title'>Sales Order</div>
                            </div>
                            <div>
                                <div className='see-all' onClick={() => navigate('/purchasing/allItemsInPort')}>see all</div>
                            </div>
                        </div>
                        <div className='odd-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
                                    Details
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='overview-container'>
                        <div className='card-title-module'>
                            <div>
                                <div className='overview-title'>SPPB</div>
                            </div>
                            <div>
                                <div className='see-all' onClick={() => navigate('/purchasing/allItemsInPort')}>see all</div>
                            </div>
                        </div>
                        <div className='odd-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
                                    Details
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='overview-container'>
                        <div className='card-title-module'>
                            <div>
                                <div className='overview-title'>Profit</div>
                            </div>
                            <div>
                                <div className='see-all' onClick={() => navigate('/purchasing/allItemsInPort')}>see all</div>
                            </div>
                        </div>
                        <div className='odd-list-items'>
                            <img src={cocoaImages} className='list-images' />
                            <div>
                                <div className='list-items-text-1'>#52217221</div>
                                <div className='list-items-text-2'>1 Days</div>
                            </div>
                            <div>
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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
                                <div className='download-button' onClick={() => navigate('/purchasing/readOnlyImport')}>
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

export default SalesIndex;