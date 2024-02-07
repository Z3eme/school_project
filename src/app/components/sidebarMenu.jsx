import React from "react";
import Link from "next/link";
import pythonData from "../resources/text/pythonData.json";
import { useRouter } from "next/navigation";
import { useState } from "react";
function SidebarMenu() {
  const { pages } = pythonData;
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="fixed left-0 h-[100%] w-1/4 bg-[#f5f5f5] p-4 border">
      <h2 className="text-lg font-bold mb-4">Pages</h2>
      <div className="flex h-full my-auto">
        <ul>
          {pages.map((page, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="mb-4"
            >
              <li key={index} className="relative">
                <Link
                  href={{ pathname: router.pathname, query: { p: index + 1 } }}
                >
                  {index +
                    1 +
                    ". " +
                    Object.values(page)[0][0].title.slice(3) +
                    "  >>"}
                </Link>
                {hoveredIndex === index && (
                  <ul className="absolute top-0 left-full bg-[#f5f5f5] border p-2 w-full mt-2">
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
    </div>
  );
}

export default SidebarMenu;
