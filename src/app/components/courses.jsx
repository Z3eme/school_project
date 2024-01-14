"use client";
import React from "react";

function CourseCard() {
  const handleGetStarted = () => {
    // Add your logic here for what should happen when the button is clicked
  };

  return (
    <div className="w-[80%] flex flex-w">
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[20%]">
        <div class="p-5">
          <div className="flex flex-wrap">
            <h5 class="mb-2 md:text-[1.2rem] font-bold tracking-tight dark:text-[#f5f5f5] text-[#191919]">
              Python - Beginner
            </h5>
            <img
              src="/imgs/python.png"
              alt=""
              className="mt-1 mr-1 ml-auto h-[2rem] w-auto z-50"
            />
          </div>

          <p class="mb-3 md:text-[1rem] font-normal dark:text-[#f5f5f5] text-[#191919]">
            Begin Python journey: essential syntax, problem-solving skills for a
            solid start!
          </p>
          <a
            href="/python"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7b7b7b] rounded-lg duration-75 hover:bg-[#494949] "
          >
            Start
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>


      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[20%]">
        <div class="p-5">
          <div className="flex flex-wrap">
            <h5 class="mb-2 md:text-[1.2rem] font-bold tracking-tight dark:text-[#f5f5f5] text-[#191919]">
              Python - Beginner
            </h5>
            <img
              src="/imgs/python.png"
              alt=""
              className="mt-1 mr-1 ml-auto h-[2rem] w-auto z-50"
            />
          </div>

          <p class="mb-3 md:text-[1rem] font-normal dark:text-[#f5f5f5] text-[#191919]">
            Begin Python journey: essential syntax, problem-solving skills for a
            solid start!
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7b7b7b] rounded-lg duration-75 hover:bg-[#494949] "
          >
            Start
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>


      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-[20%]">
        <div class="p-5">
          <div className="flex flex-wrap">
            <h5 class="mb-2 md:text-[1.2rem] font-bold tracking-tight dark:text-[#f5f5f5] text-[#191919]">
              Python - Beginner
            </h5>
            <img
              src="/imgs/python.png"
              alt=""
              className="mt-1 mr-1 ml-auto h-[2rem] w-auto z-50"
            />
          </div>

          <p class="mb-3 md:text-[1rem] font-normal dark:text-[#f5f5f5] text-[#191919]">
            Begin Python journey: essential syntax, problem-solving skills for a
            solid start!
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7b7b7b] rounded-lg duration-75 hover:bg-[#494949] "
          >
            Start
            <svg
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
