import {NavLink} from 'react-router-dom';
import React from 'react';
import './menu.css';

export function Menu() {

  return (
        <nav className="menu">
          <div className="menuDiv">
            <ul className="menuUl">
              <li>
                <NavLink style={{ textDecoration: 'none' }} to='/'>✱&nbsp;&nbsp;HOWON JUNG</NavLink>
              </li>
              <li>
                <a href="#education" style={{ textDecoration: 'none' }}>Education</a>
              </li>
              <li>
                <a href="#work-experience" style={{ textDecoration: 'none' }}>Skills</a>
              </li>
              <li>
                <a href="#project" style={{ textDecoration: 'none' }}>Experiences</a>
              </li>
            </ul>
    
            <NavLink className="playBtn styleBtn" to='/game'>
              PLAY
            </NavLink>
          </div>
        </nav>
      );
    }

