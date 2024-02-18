"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useEffect } from "react";

const CodeBox = ({ code }) => {

  return (
    <div className='bg-black text-white p-0 rounded-2xl m-0 font-monospace md:w-[100%] w-[80%]'>
      <div className='bg-slate-600 p-2 rounded-l m-0 font-bold flex items-center'>
        <span className='md:mr-60 mr-40 ml-3'>Python</span>

        <button
          className='text-white font-bold py-2 px-4 rounded'
          onClick={() => {
            navigator.clipboard.writeText(code);
          }}
        >
          Copy
        </button>
      </div>

      <div className='my-4 md:text-[110%] text-[90%]'>
        <SyntaxHighlighter language='python' style={atomDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>

  );
};

export default CodeBox;