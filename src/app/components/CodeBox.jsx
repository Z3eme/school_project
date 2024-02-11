"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useEffect } from "react";

const CodeBox = ({ code }) => {

  return (
    <div className='bg-black text-white p-[0px] rounded-2xl m-[10px] font-monospace h-auto w-[65%]'>
      <div className='bg-slate-600 p-[8px] rounded-l m-0 font-bold'>Python</div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(code);
        }}
      >
        Copy
      </button>
      <SyntaxHighlighter language="python" style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;