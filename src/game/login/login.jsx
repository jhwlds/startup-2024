
import React from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';

export function Login() {


    return (
        <header>
            <div className='login-box'>
                <div>
                    <label>Log In</label>
                    <input type="text" placeholder="Enter your name" />
                    <NavLink to='/game/play'>
                        Log In
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

