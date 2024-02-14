"use client";
import React from 'react'
import Interpreter from '../../components/PythonInterpreter'
import Navbar from "../../components/navbar";
import PaginationBar from '../../components/PaginationBar';
import Question from '../../components/Question';
import quizData from '../../resources/text/quiz.json'

function page() {
  return (
    <div>
      <div>
        <Navbar />
      </div>


      <Question />

      <PaginationBar data={quizData} dataType={"quiz"} />
    </div>
  );
}

export default page