"use client";
import React from 'react'
import Interpreter from '../../components/PythonInterpreter'
import Navbar from "../../components/navbar";
import PaginationBar from '../../components/PaginationBar';
import Question from '../../components/Question';
import quizData from '../../resources/text/quiz.json'

function page() {
  return (
    <div className='min-h-screen'>
      <div>
        <Navbar />
      </div>

      <div>
        <Question />
      </div>


      <div className='sticky top-[100vh] mb-2'>
        <PaginationBar data={quizData} dataType={"quiz"} />
      </div>
    </div>
  );
}

export default page