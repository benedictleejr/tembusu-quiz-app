'use client';
import React, { useState } from 'react';
import { quiz } from '../quizData.js';
import { CourseCard } from '../courseCard.js';

const page = () => {
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
            <img src="/000.png" className="first"></img>
            <img src="/001.png" className="second"></img>
            <img src="/002.png" className="third"></img>
            <img src="/003.png" className="fourth"></img>
            <img src="/004.png" className="fifth"></img>
            <img src="/005.png" className="sixth"></img>

            <div className='container'>
                <img src='/tembulogo.png' alt='Tembusu Logo' height='110vh'/>
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
                    <div className='result-container'>
                        <h3 id="results-header">Results</h3>
                        {Object.keys(result)
                            .map(k => ([k, result[k]]))
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 5)
                            .map((item) => (
                        <CourseCard courseID={item[0]} />
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default page;
