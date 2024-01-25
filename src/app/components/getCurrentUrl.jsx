"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

function getCurrentPageFromURL() {
    const pathname = usePathname();
    console.log(pathname);
    const currentPageIndex = (pathname.toString()).split("/");
    console.log(currentPageIndex)
    const index = (currentPageIndex.toString()).split("learn?p=1")[1];
    console.log(index)
    return index;
}

export default getCurrentPageFromURL