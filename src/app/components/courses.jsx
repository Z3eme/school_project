"use client";
import React from 'react';

function CourseCard() {
    const handleGetStarted = () => {
        // Add your logic here for what should happen when the button is clicked
    };

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full h-80">
                <img src="" alt="" />
                <div className="flex flex-col items-center justify-center w-1/2 h-1/2 bg-[#191919] max-w-[40%] md:max-w-[20%] rounded-[2vh]">
                    <h1 className="text-[#f5f5f5] md:text-2xl font-bold mt-auto ml-[20%]">Course Name</h1>
                    <p className="text-[#f5f5f5] md:text-xl">Course Description</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGetStarted}>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCard;
