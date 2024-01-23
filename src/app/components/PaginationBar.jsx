import Link from 'next/link';
import React from 'react'
import PythonData from './PythonData';

function PaginationBar() {
    return (
        <div>
            Array.from({length: 10 }, (_, index) => (
            <Link key={index} href={`/python/${index + 1}`}>
                {index + 1}
            </Link>
            ))
        </div>
    )
}

export default PaginationBar