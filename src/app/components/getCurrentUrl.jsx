"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

function getCurrentPageFromURL() {
    const router = useRouter();
    const { p } = router.query ?? {};
    const index = p || 1;
    return index;
}

export default getCurrentPageFromURL;
