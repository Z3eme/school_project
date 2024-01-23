import Link from 'next/link';
import React from 'react';

function PaginationBar({ index }) {
    return (
        <div>
            <Link key={parseInt(index)} href={`/python/learn${parseInt(index) + 1}`}>
                {parseInt(index) + 1}
            </Link>
        </div>
    )
}

export default PaginationBar