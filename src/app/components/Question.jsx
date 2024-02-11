"use client";
import React, { useState } from 'react';
import quiz from '../resources/text/quiz.json';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Intepreter from '../components/PythonInterpreter';

function Question() {
    const { questions } = quiz;
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("p") || 1;
    const url = parseInt(search);

    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };

    const checkAnser = (selected, correct) => {
        if (selected == correct) {
            console.log('Correct');
        } else {
            console.log('Incorrect');
        }
    };

    return (
        <div className='m-auto relative'>
            <div className='flex justify-center items-start max-w-[80%] text-black'>
                {questions.map((page, pageIndex) => (
                    pageIndex + 1 === url &&
                    <div key={pageIndex}>
                        {Object.values(page).map((items, index) => (
                            <div key={index}>
                                {items.map((item, itemIndex) => (
                                    <div key={itemIndex}>
                                        <h1 className='text-2xl'>{item.question}</h1>

                                        {item.answers.map((desc, descIndex) => (
                                            <p key={descIndex} onClick={() => handleAnswerClick(desc)}>{desc}</p>
                                        ))}
                                        <p className='text-[#ff0000]' id="correct">{item.correct}</p>
                                        <p className='text-[#0000ff]' id="selected">{selectedAnswer}</p>

                                        {item.type === 'closed' ? (
                                            <button onClick={() => checkAnser(selectedAnswer, item.correct)}>Check Answer</button>
                                        ) : (
                                            <Intepreter correct={item.correct} />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Question;