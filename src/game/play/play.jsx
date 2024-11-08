import React from 'react';
import './play.css';
import { useGameLogic } from './gameLogic.js';

export function Play() {
    const { questions, currentQuestionIndex, score, handleAnswerClick } = useGameLogic();
    const currentQuestion = questions[currentQuestionIndex];

    return (
        <header>
            <div className="two-box">
                <div className="game-box">
                    <div className="gameQ">
                        <p>{currentQuestion.questionText}</p>
                    </div>
                    <div className="gameA">
                        {currentQuestion.options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="rank-box">
                    <h2>Score: {score}</h2>
                </div>
            </div>
        </header>
    );
}