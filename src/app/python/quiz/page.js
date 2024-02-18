"use client";
import React from 'react'
import Interpreter from '../../components/PythonInterpreter'
import Navbar from "../../components/navbar";
import PaginationBar from '../../components/PaginationBar';
import Question from '../../components/Question';
import quizData from '../../resources/text/quiz.json'

function page() {
  return (
    <div className='min-h-screen max-w-[100%] overflow-x-hidden m-0 p-0'>
      <Navbar />

      <Question />


      <div className='sticky top-[100vh] mb-2'>
        <PaginationBar data={quizData} dataType={"quiz"} />
      </div>
    </div>
  );
}

export default page