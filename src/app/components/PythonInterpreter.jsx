'use client'
import { useState } from 'react'
import { usePython } from 'react-py'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Codeblock({ correct }) {
  const [input, setInput] = useState('')

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()


  const checkAnser = (correct, stdout) => {
    if (stdout.trim() == correct.trim()) {
      console.log('Correct');
    } else {
      console.log(correct)
      console.log(stdout)

      console.log('Incorrect');
    }
  }

  return (
    <div className="bg-gray-200 m-auto h-auto w-auto">
      <h1>{correct}</h1>
      <form>
        <textarea
          className="resize-none w-[35%] h-[300px]"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your code here"
        />

        <input
          type="submit"
          value={!isRunning ? "Run" : "Running..."}
          disabled={isLoading || isRunning}
          onClick={(e) => {
            e.preventDefault();
            runPython(input);
          }}
        />
      </form>
      <p>Output: </p>
      <pre>
        <code>{stdout}</code>
        <code>{stderr}</code>
      </pre>
      <button onClick={() => checkAnser(correct, stdout)}>Check Answer</button>
    </div>
  );
}