import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && userName) {
            navigate(`/game/play?name=${userName}`);
        }
    };

    return (
        <header>
            <div className='login-box'>
                <div>
                    <label>Log In</label>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        onKeyDown={handleKeyDown}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} 
                    />
                    <NavLink to={`/game/play?name=${userName}`}>
                        Log In
                    </NavLink>
                </div>
            </div>
        </header>
    );
}