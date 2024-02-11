"use client";
import React from 'react'
import Interpreter from '../../components/PythonInterpreter'
import Navbar from "../../components/navbar";
import PaginationBar from '../../components/PaginationBar';
import Question from '../../components/Question';
import quizData from '../../resources/text/quiz.json'

function page() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <Question />

      <PaginationBar data={quizData} />
    </div>
  );
}

export default page