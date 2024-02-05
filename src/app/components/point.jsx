import React from 'react';
import pythonData from '../resources/text/pythonData.json';
import {useRouter} from 'next/navigation';
import { useSearchParams } from 'next/navigation';

function Point() {
    const { pages } = pythonData;
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get("p") || 1;
    const url = parseInt(search);

    return (
        <div className='flex justify-center items-start max-w-[80%] text-black'>
            {pages.map((page, pageIndex) => (
                pageIndex + 1 === url &&
                <div key={pageIndex}>
                    {Object.values(page).map((items, index) => (
                        <div key={index}>
                            {items.map((item, itemIndex) => (
                                <div key={itemIndex}>
                                    <h2>{item.title}</h2>
                                    {item.description.map((desc, descIndex) => (
                                        <p key={descIndex}>{desc}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Point;