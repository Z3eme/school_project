import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import pythonData from "../resources/text/pythonData.json";

function PaginationBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchP = parseInt(searchParams.get("p")) || 1;
  const searchSp = parseInt(searchParams.get("sp")) || 1;
  const { pages } = pythonData;
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

  function checkForSections(direction, p, sp){
    if(direction == "1"){
      if(sp == sectionsNum[(p-1)][String(p)]){
        if(p<amount){
          p++;
          sp = 1;
          [newP, newSp] = [p, sp];
        }
      }
      else{
        sp++;
        [newP, newSp] = [p, sp];
      }
    }
    else if(direction == "0"){
      if(sp == 1){
        if(p>1){
          p--;
          sp = sectionsNum[(p-1)][String(p)];
          [newP, newSp] = [p, sp];
        }
      }
      else{
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

    
  
  
  console.log(currentPage);

  const totalSections = amount;

  return (
    <div className="dark:text-[#f5f5f5] text-[#191919] text-center m-auto p-auto">
      {currentPage > 1 ? (
        <Link onClick={checkForSections(0,searchP,searchSp)} href={{ pathname: router.pathname, query: { p: newP, sp: newSp } }}>
          &lt;
        </Link>
      ) : (
        <span className="dark:text-[#9a9a9a] text-[#535353]">&lt;</span>
      )}{" "}
      {currentPage > 1 && currentPage - 1 > 1 && (
        <Link href={{ pathname: router.pathname, query: { p: 1, sp: 1 } }}>1 ...</Link>
      )}{" "}

      {currentPage > 1 && (
        <Link onClick={checkForSections(0,searchP,searchSp)} href={{ pathname: router.pathname, query: { p: newP, sp: newSp } }}>
          {currentPage - 1}
        </Link>
      )}{" "}

      <Link href={{ pathname: router.pathname, query: { p: searchP } }}>
        {currentPage}
      </Link>{" "}

      {currentPage < totalSections && (
        <Link onClick={checkForSections(1,searchP,searchSp)} href={{ pathname: router.pathname, query: { p: newP, sp: newSp } }}>
          {currentPage + 1}
        </Link>
      )}{" "}

      {currentPage < totalSections && currentPage + 1 < totalSections && (
        <Link href={{ pathname: router.pathname, query: { p: 6, sp: 3 } }}>
          {"... " + amount}
        </Link>
      )}{" "}
      {currentPage < totalSections ? (
        <Link onClick={checkForSections(1,searchP,searchSp)} href={{ pathname: router.pathname, query: { p: newP, sp: newSp } }}>
          &gt;
        </Link>
      ) : (
        <span className="dark:text-[#9a9a9a] text-[#535353]">&gt;</span>
      )}
    </div>
  );
      }      


export default PaginationBar;
