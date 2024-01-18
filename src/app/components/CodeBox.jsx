import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBox = ({ code }) => {

  const buttonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
    padding: '5px 10px',
    backgroundColor: '#007acc',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    outline: 'none',
  };

  return (
    <div className='bg-black text-white p-[0px] rounded-2xl m-[10px] font-monospace h-auto w-[65%]'>
      <div className='bg-slate-600 p-[8px] rounded-l m-0 font-bold'>Python</div>
      <SyntaxHighlighter language="python" style={atomDark}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBox;