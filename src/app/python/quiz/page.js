"use client";
import React from 'react'
import Interpreter from '../../components/PythonInterpreter'
import Navbar from "../../components/navbar";
import PaginationBar from '../../components/PaginationBar';
import Question from '../../components/Question';

function page() {
  return (
    <div>
      <Navbar />

      <Question />

      <PaginationBar />
    </div>
  );
}

export default page