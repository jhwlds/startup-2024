import React from 'react';
import './game.css';

export function Game(props) {
    return(
    
          <header>
            <div className="two-box">
              
              <div className="game-box">
                <div>
                  <div>
                    <label>Log In (DB data)</label>
                  </div>
      
                  <div className="gameQ">
                    <p>What was the name of the website that I made?</p>
                  </div>
      
                  <div className="gameA">
                    <button onClick={() => handleAnswerClick('findmyprofessors.com')}>
                      <p>findmyprofessors.com</p>
                    </button>
                    <button onClick={() => handleAnswerClick('whoareyou.com')}>
                      <p>whoareyou.com</p>
                    </button>
                  </div>
      
                </div>
              </div>
      
              <div className="rank-box">
                <h2>Top Rank with WebSocket data</h2>
                <ol>
                  <li>Howon</li>
                  <li>John</li>
                  <li>Tom</li>
                </ol>
              </div>
      
            </div>
          </header>
    );
  }
