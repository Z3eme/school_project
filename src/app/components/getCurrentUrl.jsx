"use client";
import React from 'react';
import { usePathname } from 'next/navigation';

function getCurrentPageFromURL() {
    const pathname = usePathname();
    const currentPageIndex = (pathname.toString()).split("/");
    const index = (currentPageIndex.toString()).split("learn")[1];

    return index;
}

export default getCurrentPageFromURL;