import { useState } from "react";
import "./Quiz.css";

const questions = [
    { question: "¿Cuánto es 5 + 3?", options: ["6", "7", "8", "9"], answer: "8" },
    { question: "¿Cuál es la raíz cuadrada de 16?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "¿Cuánto es 12 ÷ 4?", options: ["2", "3", "4", "5"], answer: "3" },
    { question: "¿Cuánto es 9 × 9?", options: ["72", "81", "90", "99"], answer: "81" }
];

export const MathQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleAnswer = (option) => {
        setAnswers({ ...answers, [currentQuestion]: option });
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResults(true);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const calculateScore = () => {
        return Object.keys(answers).reduce((score, index) => {
            if (answers[index] === questions[index].answer) {
                return score + 1;
            }
            return score;
        }, 0);
    };

    return (
        <div className="quiz-container">
            {!showResults ? (
                <>
                    <h2>{questions[currentQuestion].question}</h2>
                    <div className="options">
                        {questions[currentQuestion].options.map((option) => (
                            <button
                                key={option}
                                className={answers[currentQuestion] === option ? "selected" : ""}
                                onClick={() => handleAnswer(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="navigation">
                        <button onClick={prevQuestion} disabled={currentQuestion === 0}>⬅</button>
                        <button onClick={nextQuestion}>➡</button>
                    </div>
                </>
            ) : (
                <div className="results">
                    <h2>Resultados</h2>
                    <p>Respuestas correctas: {calculateScore()} de {questions.length}</p>
                </div>
            )}
        </div>
    );
};
