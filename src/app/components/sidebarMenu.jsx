import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import pythonData from "../resources/text/pythonData.json";
import { useRouter } from "next/navigation";

function SidebarMenu() {
  const { pages } = pythonData;
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    isMenuVisible ? setMenuVisible(false) : setMenuVisible(true);
    console.log(isMenuVisible);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className={
        "fixed left-0 top-[4rem] bottom-0 bg-[#f5f5f5] p-4 border w-[20rem]"
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="currentColor"
        class="bi bi-arrow-left absolute top-4 right-4"
        viewBox="0 0 16 16"
        onClick={showMenu}
      >
        <path
          fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
        />
      </svg>
      <h2 className="text-lg font-bold mb-4">Pages</h2>
      <ul>
        {pages.map((page, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="mb-4"
          >
            <li className="relative flex flex-col">
              <Link
                href={{ pathname: router.pathname, query: { p: index + 1 } }}
                className="border-b-2 border-transparent hover:border-[#5b5b5b] transition-all duration-300 ease-in-out"
              >
                {index +
                  1 +
                  ". " +
                  Object.values(page)[0][0].title.slice(3) +
                  "  >>"}
              </Link>
              {hoveredIndex === index && (
                <ul
                  className={`absolute top-0 left-[60%] bg-[#f5f5f5] border p-2 w-full mt-2 z-[999]`}
                >
                  {Object.values(page)[0].map((subPage, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={{
                          pathname: router.pathname,
                          query: { p: index + 1, sp: subIndex + 1 },
                        }}
                      >
                        {subIndex + 1 + ". " + subPage.title.slice(3)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
