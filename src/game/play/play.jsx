import React from 'react';
import './play.css';
import { useGameLogic } from './gameLogic.js';
import { useLocation } from 'react-router-dom';

export function Play() {
    const { questions, currentQuestionIndex, score, isGameOver, handleAnswerClick } = useGameLogic();
    const currentQuestion = questions[currentQuestionIndex];
    const location = useLocation();
    const userName = new URLSearchParams(location.search).get('name');

    return (
        <header>
            <div className="two-box">
                <div className="game-box">
                    <div className="gameQ">
                        {!isGameOver && <p>{currentQuestion.questionText}</p>}
                    </div>
                    <div className="gameA">
                        {!isGameOver ? (
                            currentQuestion.options.map((option, index) => (
                                <button key={index} onClick={() => handleAnswerClick(option)}>
                                    {option}
                                </button>
                            ))
                        ) : (
                            <div>
                                <h2>{userName}, Your final score is: {score}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}