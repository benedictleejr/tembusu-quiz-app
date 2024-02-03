'use client';
import React, { useState } from 'react';
import { quiz } from '../data.js';

const page = () => {
<<<<<<< HEAD
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);
=======
    //increment quiz question
    const [activeQuestion, setActiveQuestion] = useState(0);
    //true if answer is selected
    const [checked, setChecked] = useState(false);
    //currently selected answer index
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    //currently selected answer
    const [selectedAnswer, setSelectedAnswer] = useState('');
    //check if result page should be shown
    const [showResult, setShowResult] = useState(false);
    //output for result page
    const [result, setResult] = useState({});
>>>>>>> 8d7c3825fc167b1d697b7de92d0cb71953f64b47

    const { questions } = quiz;
    const { question, answers, mappedAnswer } = questions[activeQuestion];

    //   Select answer
    const onAnswerSelected = (answer, idx) => {
        setChecked(true);
        setSelectedAnswerIndex(idx);
        setSelectedAnswer(answer);
    };

    // Add the relevant courses to the result state
    const nextQuestion = () => {
        setSelectedAnswerIndex(null);
        const coursesArray = mappedAnswer[selectedAnswer];
        
        coursesArray.forEach((course) => {
            setResult((prev) => ({
                ...prev,
                [course]: prev[course] ? prev[course] + 1 : 1,
            }));
        });
        
        if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1);
        } else {
        setActiveQuestion(0);
        setShowResult(true);
        }
        setChecked(false);
    };

    return (
        <div className='container-container'>
            <div className='container'>
            <h1>Quiz Page</h1>
            <div>
                {!showResult ? <h2>
                Question: {activeQuestion + 1}
                <span>/{questions.length}</span>
                </h2> : null}
            </div>
            <div>
                {!showResult ? (
                <div className='quiz-container'>
                    <h3>{questions[activeQuestion].question}</h3>
                    {answers.map((answer, idx) => (
                    <li
                        key={idx}
                        onClick={() => onAnswerSelected(answer, idx)}
                        className={
                        selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                        }
                    >
                        <span>{answer}</span>
                    </li>
                    ))}
                    {checked ? (
                    <button onClick={nextQuestion} className='btn'>
                        {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                    </button>
                    ) : (
                    <button onClick={nextQuestion} disabled className='btn-disabled'>
                        {' '}
                        {activeQuestion === question.length - 1 ? 'Finish' : 'Next'}
                    </button>
                    )}
                </div>
                ) : (
                <div className='quiz-container'>
                    <h3>Results</h3>
                    {Object.entries(result).map(([course, count]) => (
                        <div key={course}>
                            <div>{course}</div>
                            <div>{count}</div>
                        </div>
                    ))}
                </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default page;
