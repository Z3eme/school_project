"use client";
import React, { useState } from "react";
import CoursesData from "../resources/text/data.json";
 
function CourseCard({ darkMode }) {
  const { Courses } = CoursesData;
  const [avaiable, setAvaiable] = useState(true);
 
  return (
    <div className="flex flex-wrap justify-center items-start gap-4 w-full max-w-[80%] mx-auto" id="courses">
      {Courses.map((course, index) => (
       
        <div key={index} className="flex flex-col bg-[#f6f6f6] border border-gray-200 rounded-lg shadow dark:bg-[#252525] dark:border-[#252525] w-80 mb-4">
          <div className={course.avaiable ? "block w-[100%] h-[100%] bg-[#000000]" : "hidden"}>
          </div>
          <div className="flex flex-wrap items-center">
            <h5 className="pl-2 pt-2 mb-2 md:text-[1.2rem] font-bold tracking-tight dark:text-[#f5f5f5] text-[#191919]">
              {course.name}
            </h5>
            <img
              src={darkMode ? course.img.light : course.img.dark}
              alt=""
              className="mt-1 mr-1 ml-auto h-[2rem] w-auto z-50"
            />
          </div>
 
          <div className="flex-1">
            <p className="mb-3 pl-2 md:text-[1rem] font-normal dark:text-[#f5f5f5] text-[#191919]">
              {course.description}
            </p>
            <span className="pl-2 pb-2">
              <a
                href={course.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#7b7b7b] rounded-lg duration-75 hover:bg-[#494949] "
              >
                Start
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default CourseCard;