import photoLogin from '../Assets/login.png';
import emailIcon from '../Assets/Icon/Message.png';
import passwordIcon from '../Assets/Icon/Lock.png';
import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import generalStyle from '../General.css';
import loginStyle from '../Login/Login.css';
import dashboardStyle from '../DashboardStyle.css';
import axios from 'axios';

function LoginForm(){
    let navigate = useNavigate();

    {/* #region Grouped Comments */}
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://www.kevinngabriell.com/erpsystemsapi/account/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: new URLSearchParams({
                    'username': username,
                    'password': password
                })
            });
        
            const rawResponse = await response.text(); // Get the raw response as text
            const trimmedResponse = rawResponse.trim(); // Trim any leading or trailing whitespace
        
            const result = JSON.parse(trimmedResponse);
        
            if (response.ok) {
                sessionStorage.setItem('username', result.username);
                sessionStorage.setItem('company_id', result.company_id);
                sessionStorage.setItem('employee_id', result.employee_id);
                
                setIsLoggedIn(true);
                navigate("/dashboard");
            } else {
                alert("Silahkan periksa kembali username dan password");
                setIsLoggedIn(false);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
        
      };
      
    {/* #endregion */}

    return (
        <div className='App'>
            {/* {isLoggedIn ? <IndexPage /> : ( */}
               <div className='App-header'>
                    <div className='column'>
                        <img src={photoLogin} className="photoLogin"/>
                    </div> 
                    <div className='column'>
                        <div className="header">Login into your Account</div>
                        <div className="paragraph">Sed ut perspiciatis unde omnis iste natus error</div>
                        <div className="general-form-input">
                            <img src={emailIcon} alt="user" />
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="general-form-input">
                            <img src={passwordIcon} alt="user" />
                            <input
                                type="passord"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button onClick={handleLogin} className="loginButton">Login</button>
                    </div> 
               </div>
            {/* )} */}
        </div>
    );
}

export default LoginForm;