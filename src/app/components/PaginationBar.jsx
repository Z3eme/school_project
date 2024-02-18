import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function PaginationBar({ data, dataType }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchP = parseInt(searchParams.get("p")) || 1;
  const searchSp = parseInt(searchParams.get("sp")) || 1;
  const { pages } = data;
  let sectionsNum = [];
  let amount = 0;
  let i = 0;
  let newP, newSp;
  let currentPage;

  pages.forEach((pageObj) => {
    i++;
    Object.values(pageObj).forEach((sections) => {
      amount += sections.length;
      sectionsNum.push({ [i]: sections.length });
    });
  });

  function checkForSections(direction, p, sp) {
    if (direction == "1") {
      if (sp == sectionsNum[(p - 1)][String(p)]) {
        if (p < amount) {
          p++;
          sp = 1;
          [newP, newSp] = [p, sp];
        }
      }
      else {
        sp++;
        [newP, newSp] = [p, sp];
      }
    }
    else if (direction == "0") {
      if (sp == 1) {
        if (p > 1) {
          p--;
          sp = sectionsNum[(p - 1)][String(p)];
          [newP, newSp] = [p, sp];
        }
      }
      else {
        sp--;
        [newP, newSp] = [p, sp];

      }
    }
  };

  let j = 0;
  let found = false;

  for (let indexP = 0; indexP < pages.length && !found; indexP++) {
    const chapter = pages[indexP];
    const sections = Object.values(chapter)[0];

    for (let indexSp = 0; indexSp < sections.length && !found; indexSp++) {
      j++;

      if (indexP + 1 == searchP && indexSp + 1 == searchSp) {
        currentPage = j;
        break;
      }
    }
  }

  const totalSections = amount;

  return (
    <div className="bottom-0 left-0 right-0 flex flex-row items-center gap-4 justify-center dark:text-[#f5f5f5] text-[#191919] text-center m-auto p-auto bg-white dark:bg-[#1f1f1f] space-y-2 md:flex-row md:gap-80">
      {currentPage > 1 ? (
        <Link
          onClick={checkForSections(0, searchP, searchSp)}
          href={{ pathname: router.pathname, query: { p: newP, sp: newSp } }}
          className="text-[#535353] dark:text-[#9a9a9a] hover:text-[#191919] dark:hover:text-[#f5f5f5] focus:outline-none text-6xl"
        >
          &lt;
        </Link>
      ) : (
        <span className="dark:text-[#9a9a9a] text-[#535353]">&lt;</span>
      )}

      <div className="flex items-center justify-center">
        {dataType !== "quiz" ? (
          <div className="text-center">
            <button className="inline-flex items-center justify-center p-1 md:p-0.5 mb-2 me-2 mt-2 md:mt-0 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 md:px-10 md:py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a href="/python/quiz" className="text-gray-900 dark:text-white hover:text-white dark:hover:text-white">
                  Go to Quiz
                </a>
              </span>
            </button>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {currentPage < totalSections ? (
        <Link
          onClick={checkForSections(1, searchP, searchSp)}
          href={{ pathname: router.pathname, query: { p: newP, sp: newSp } }}
          className="text-[#535353] dark:text-[#9a9a9a] hover:text-[#191919] dark:hover:text-[#f5f5f5] focus:outline-none text-6xl"
        >
          &gt;
        </Link>
      ) : (
        <span className="dark:text-[#9a9a9a] text-[#535353] bg-gray">&gt;</span>
      )}
    </div>



  );
}


export default PaginationBar;
