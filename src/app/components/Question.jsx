"use client";
import React, { useEffect, useState } from 'react';
import quiz from '../resources/text/quiz.json';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Intepreter from '../components/PythonInterpreter';

function Question() {
    const { pages } = quiz;
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("p") || 1;
    const url = parseInt(search);

    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isCorrect, setIsCorrect] = useState("");

    const handleAnswerClick = (answerIndex) => {
        setSelectedAnswer(answerIndex);
    };

    const checkAnswer = (correct, selected) => {
        if (correct == selected) {
            setIsCorrect("Correct");
        } else {
            setIsCorrect("Incorrect");
        }
    }

    useEffect(() => {
        setIsCorrect('');
    }, [url]);

    return (
        <div className='m-auto relative'>
            <div className='flex justify-center md:items-start items-center max-w-[80%] text-black'>
                {pages.map((page, pageIndex) => (
                    pageIndex + 1 === url && (
                        <div key={pageIndex}>
                            {Object.values(page).map((items, index) => (
                                <div key={index}>
                                    {items.map((item, itemIndex) => (
                                        <div key={itemIndex} className='mb-4 md:ml-60 ml-40 m-0'>
                                            <h1 className='dark:text-white md:text-4xl text-2xl mb-2 text-center'>{item.question}</h1>

                                            {item.answers.map((desc, descIndex) => (
                                                <p
                                                    key={descIndex}
                                                    className={`cursor-pointer inline-block p-4 md:p-4 md:mt-10 md:text-3xl border rounded ${selectedAnswer === desc ? 'bg-blue-500 text-white' : 'bg-white text-black'
                                                        }`}
                                                    onClick={() => handleAnswerClick(desc)}
                                                >
                                                    {desc}
                                                </p>
                                            ))}

                                            {item.type === 'closed' ? (
                                                <div className='flex flex-col items-center mt-4'>
                                                    <button
                                                        className='bg-green-500 hover:bg-green-700 text-white  font-bold py-2 px-4 rounded md:px-8 md:py-4 md:text-2xl'
                                                        onClick={() => checkAnswer(item.correct, selectedAnswer)}
                                                    >
                                                        Check Answer
                                                    </button>
                                                    <p className={`mt-6 md:w-[23rem] w:-[6rem] text-white text-center md:text-7xl text-2xl p-4 rounded-md ${isCorrect === "Correct" ? 'bg-green-500' : isCorrect === "Incorrect" ? 'bg-red-500' : 'bg-white'}`}>
                                                        {isCorrect}
                                                    </p>

                                                </div>
                                            ) : (

                                                <Intepreter correct={item.correct} />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )
                ))}
            </div>
        </div>

    );
}

export default Question;