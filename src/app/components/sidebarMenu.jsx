import React, { useState, useEffect } from "react";
import Link from "next/link";
import pythonData from "../resources/text/pythonData.json"; // Ensure the path matches your project structure
import { useRouter } from "next/navigation"; // Corrected import path

function SidebarMenu() {
  const pages = pythonData.pages;
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    setDarkMode(document.body.dark || false);
  }, [isMenuVisible]);
  console.log(darkMode);
  return (
    <div className="fixed left-0 top-[4rem] bottom-0 w-[20rem] dark:text-[#f5f5f5] text-[#191919]]">
      {/* Adjusted SVG button logic for visibility and positioning */}
      <svg
        onClick={toggleMenuVisibility}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className={`absolute top-4 left-[3%] rotate-180 dark:text-[#f5f5f5]`}
        viewBox="0 0 16 16"
        style={{ cursor: 'pointer' }} // Added for better user interaction
      >
        <path
          fillRule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
      </svg>
      <div
        className={`${isMenuVisible ? "fixed left-0 top-[4rem] bottom-0 bg-[#f5f5f5] dark:bg-red p-4 border w-[20rem] ease-in-out duration-[750ms] z-0" : "fixed left-[-500px] top-[4rem] bottom-0 bg-[#f5f5f5] dark:bg-red p-4 border w-[20rem] ease-in-out duration-[750ms] z-0"} dark:bg-[#191919]`}
      >
        <svg
        onClick={toggleMenuVisibility}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        className={`absolute top-4 left-[85%] dark:text-[#f5f5f5]`}
        viewBox="0 0 16 16"
        style={{ cursor: 'pointer' }} // Added for better user interaction
      >
        <path
          fillRule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
      </svg>
        <h2 className="text-lg font-bold mb-4">Pages</h2>
        <ul>
          {pages.map((page, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="mb-4 relative dark:bg-[#191919] dark:text-[#f5f5f5]"
            >
              
                <p className="border-b-2 border-transparent hover:border-[#5b5b5b] transition-all duration-300 ease-in-out">
                  {Object.keys(page)[0] + ".  >>"}
                </p>
              
              {hoveredIndex === index && (
                <ul className="absolute top-0 left-[60%] bg-[#f5f5f5] border p-2 w-full mt-2 z-[999] dark:bg-[#191919]">
                  {Object.values(page)[0].map((item, itemIndex) => (
                    <li key={itemIndex} className="hover:bg-gray-200">
                      <Link
                        href={{
                          pathname: router.pathname,
                          query: { p: index + 1, sp: itemIndex + 1 },
                        }}
                      >
                        <p className="block p-2">
                          {item.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
