import React from 'react';
import pythonData from '../resources/text/pythonData.json';
import { useRouter } from 'next/navigation'; // Correct import for useRouter
import { useSearchParams } from 'next/navigation'; // Assuming this is a hypothetical hook for managing search params in your setup

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
        <div className='m-auto relative'>
            <div className='flex justify-center items-start max-w-[80%] text-black'>
                {pageExists && sectionExists && (
                    <div>
                        {Object.values(pages[pageIndex])[0][subPageIndex] && (
                            <div>
                                <h1 className='text-2xl'>{Object.values(pages[pageIndex])[0][subPageIndex].title}</h1>
                                {Object.values(pages[pageIndex])[0][subPageIndex].description.map((desc, descIndex) => (
                                    <p key={descIndex}>{desc}</p>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Point;
