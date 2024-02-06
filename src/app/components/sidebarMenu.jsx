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
    <div className="fixed left-0 h-[80vh] w-1/4 bg-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Pages</h2>
      <div className="flex h-full my-auto">
        <ul>
          {pages.map((page, index) => (
            <li key={index} className="relative">
              <div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className="mt-[5%]"
              >
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
                  <ul className="absolute top-0 left-full bg-white border p-2 w-[80%]">
                    {pages[0].map((item, itemIndex) => (
                      <li>{item.title}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SidebarMenu;
