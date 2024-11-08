import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
    const navigate = useNavigate();

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            navigate('/game/play');
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
                    />
                    <NavLink to='/game/play'>
                        Log In
                    </NavLink>
                </div>
            </div>
        </header>
    );
}
