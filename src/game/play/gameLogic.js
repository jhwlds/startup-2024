import { useState } from 'react';
import questions from './questions';

export const useGameLogic = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleAnswerClick = (selectedAnswer) => {
        if (isGameOver) return;

        const correctAnswer = questions[currentQuestionIndex].correctAnswer;
        if (selectedAnswer === correctAnswer) {
            setScore((prevScore) => prevScore + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setIsGameOver(true);
        }
    };

    return { questions, currentQuestionIndex, score, isGameOver, handleAnswerClick };
};