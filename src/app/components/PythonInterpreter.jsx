'use client'
import { useState } from 'react'
import { usePython } from 'react-py'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Codeblock() {
  const [input, setInput] = useState('')

  // Use the usePython hook to run code and access both stdout and stderr
  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()

  return (
    <div className="bg-gray-200 m-auto h-auto w-auto">
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
    </div>
  );
}