'use client';
import { useState } from 'react';
import { usePython } from 'react-py';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Codeblock({ correct }) {
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython();

  const checkAnser = (correct, stdout) => {
    if (stdout.trim() === correct.trim()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="bg-gray-200 m-auto p-4 max-w-md">
      <form className="mb-4">
        <textarea
          className="resize-none w-full h-40 p-2 border rounded"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your code here"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={isLoading || isRunning}
          onClick={(e) => {
            e.preventDefault();
            runPython(input);
          }}
        >
          {!isRunning ? 'Run' : 'Running...'}
        </button>
      </form>
      <p className="mb-2">Output:</p>
      <div className="bg-white p-4 border rounded">
        {stdout}
        {stderr}
      </div>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => checkAnser(correct, stdout)}
      >
        Check Answer
      </button>
      <p className={`mt-2 text-lg font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
        {isCorrect ? 'Correct' : 'Nicht correct'}
      </p>
    </div>
  );
}