import React from 'react';
import pythonData from '../resources/text/pythonData.json';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import { useSearchParams } from 'next/navigation'; // Assuming this is a hypothetical hook for managing search params in your setup
import CodeBox from '../components/CodeBox';
import PythonInterpreter from '../components/PythonInterpreter';

function Point() {
    const { pages } = pythonData;
    const router = useRouter();
    const searchParams = useSearchParams();
    const pageParam = searchParams.get('p') || '1'; // Get the page number from query params
    const subPageParam = searchParams.get('sp') || '1'; // Get the sub-page (section) number from query params
    const pageIndex = parseInt(pageParam, 10) - 1; // Adjusting index to 0-based for JavaScript arrays
    const subPageIndex = parseInt(subPageParam, 10) - 1; // Adjusting index to 0-based

    // Ensure we're accessing the correct page and section
    const pageExists = pages.length > pageIndex && pages[pageIndex] !== undefined;
    const sectionExists = pageExists && Object.values(pages[pageIndex])[0].length > subPageIndex;

    return (
        <div className='md:m-auto m-0 h-full w-full text-center md:pl-[43%] pl-5 md:pt-[5%] pt-0'>
            <div className='flex justify-center w-[50rem] text-black'>
                {pageExists && sectionExists && (
                    <>
                        {Object.values(pages[pageIndex])[0][subPageIndex] && (
                            <div>
                                <h1 className='text-[2rem] md:text-[4rem] text-left dark:text-white'>
                                    {Object.values(pages[pageIndex])[0][subPageIndex].title}
                                </h1>
                                <div className='text-left mt-[10%] w-[60%]'>
                                    {Object.values(pages[pageIndex])[0][subPageIndex].description.map((desc, descIndex) => (
                                        <li key={descIndex} className='dark:text-[#f5f5f5] md:text-[1.5rem] text-[1rem]'>{desc}</li>
                                    ))}
                                </div>
                                {/* Add a conditional check before mapping over the 'code' property */}
                                {Object.values(pages[pageIndex])[0][subPageIndex].code && (
                                    <div className='w-[25rem]'>
                                        {Object.values(pages[pageIndex])[0][subPageIndex].code.map((code, codeIndex) => (
                                            <div key={codeIndex}>
                                                <CodeBox code={code} />
                                            </div>
                                        ))}
                                    </div>

                                )}

                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Point;
