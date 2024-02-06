import React from 'react'
import Interpreter from '../../components/PythonInterpreter'
import Navbar from "../../components/navbar";

function page() {
  return (
    <div>
      <Navbar />
      <Interpreter />
    </div>
  );
}

export default page