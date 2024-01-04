import React, { useEffect, useState }  from 'react';
import SettingMenuSection from './SettingMenuSection';
import DashboardTop from '../DashboardTop';
import axios from 'axios';

function OriginIndex(){
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({
        countryName: '',
        region: '',
        isFreeTrade: '',
    });

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://www.kevinngabriell.com/erpsystemsapi/master/origin.php');
            setData(response.data.Data);
            setFilteredData(response.data.Data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    const applyFilters = () => {
        let filteredResult = data;
    
        if (filters.countryName) {
          filteredResult = filteredResult.filter(item =>
            item.origin_name.toLowerCase().includes(filters.countryName.toLowerCase())
          );
        }
    
        if (filters.region) {
          filteredResult = filteredResult.filter(item =>
            item.region_name.toLowerCase().includes(filters.region.toLowerCase())
          );
        }
    
        if (filters.isFreeTrade) {
          filteredResult = filteredResult.filter(
            item => item.origin_is_free_trade === filters.isFreeTrade
          );
        }
    
        setFilteredData(filteredResult);
      };
    
      const handleFilterChange = event => {
        const { name, value } = event.target;
        setFilters(prevFilters => ({
          ...prevFilters,
          [name]: value,
        }));
      };
    
      useEffect(() => {
        applyFilters();
      }, [filters]);

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
                                <div className='overview-title'>Origin</div>
                            </div>
                        </div>
                        <div className='filter-grid'>
                            <div className='filter-grid-2-setting'>
                                <div>
                                    <div className='form-label'>Country</div>
                                    <input
                                        type="text"
                                        name="countryName"
                                        value={filters.countryName}
                                        onChange={handleFilterChange}
                                        className='general-form-input'
                                    />
                                </div>
                                <div>
                                    <div className='form-label'>Region</div>
                                    <input
                                        type="text"
                                        name="region"
                                        value={filters.region}
                                        onChange={handleFilterChange}
                                    />
                                </div>
                                <div>
                                    <div className='form-label'>Free Trade Area</div>
                                    <select name="isFreeTrade" value={filters.isFreeTrade} onChange={handleFilterChange}>
                                        <option value="">All</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <table className="data-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '20px' }}>No</th>
                                    <th>Country</th>
                                    <th>Region</th>
                                    <th>Free Trade Area</th>
                                </tr>
                            </thead>
                            <tbody>
                            {filteredData.map((row, index) => (
                                <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{row.origin_name}</td>
                                <td className="table-center">{row.region_name}</td>
                                <td className="table-center">{row.origin_is_free_trade === '1' ? 'Yes' : 'No'}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OriginIndex;