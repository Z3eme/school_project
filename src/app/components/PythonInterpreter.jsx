'use client';
import { useState } from 'react';
import { usePython } from 'react-py';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Codeblock({ correct }) {
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState("");

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();

  const checkAnser = (correct, stdout) => {
    if (stdout.trim() === correct.trim()) {
      setIsCorrect("Correct");
    } else {
      setIsCorrect("Incorrect");
    }
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-800 dark:text-white p-4 md:pb-8 pb-2 ml-0 md:ml-40 mt-10 md:w-[150%] w-[110%] max-w-[50rem] text-2xl">
      <form className="mb-4">
        <textarea
          className="dark:bg-[#141414] resize-none w-[100%] md:h-[20rem] h-[8rem] p-2 border rounded md:text-2xl text-sm"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your code here"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:px-4 px-2 md:text-2xl text-lg rounded"
          disabled={isLoading || isRunning}
          onClick={(e) => {
            e.preventDefault();
            runPython(input);
          }}
        >
          {!isRunning ? 'Run' : 'Running...'}
        </button>
      </form>
      <p className="mb-2 md:text-xl text-lg">Output:</p>
      <div className="bg-white dark:bg-[#141414] md:p-4 p-1 md:text-2xl text-sm border rounded">
        {stdout}
        {stderr}
      </div>
      {correct !== "" ? (
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold md:py-2 md:px-4 p-1 md:text-2xl text-lg rounded mt-4"
            onClick={() => checkAnser(correct, stdout)}
          >
            Check Answer
          </button>
          <p className={`mt-2 md:text-lg text-sm font-bold`}>
            {isCorrect}
          </p>
        </div>
      ) : (
        <p></p>
      )}

    </div>
  );
}