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
            updateRanks();
        }
    };

    // 랭킹 업데이트 함수
    const updateRanks = () => {
        const userName = new URLSearchParams(window.location.search).get('name');
        const newScore = { name: userName, score };
        
        const savedScores = JSON.parse(localStorage.getItem('topScores')) || [];
        
        // 점수 배열에 새 점수 추가 후 내림차순 정렬
        const updatedScores = [...savedScores, newScore]
            .sort((a, b) => b.score - a.score)
            .slice(0, 5); // 상위 5명만 유지
        
        localStorage.setItem('topScores', JSON.stringify(updatedScores));
    };

    return { questions, currentQuestionIndex, score, isGameOver, handleAnswerClick };
};