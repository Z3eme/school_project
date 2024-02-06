import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import pythonData from "../resources/text/pythonData.json";

function PaginationBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("p") || 1;
  const url = parseInt(search);

  const { pages } = pythonData;
  const amount = pages.length;

  return (
    <div className="dark:text-[#f5f5f5] text-[#191919] text-center m-auto p-auto ">
      {url > 1 ? (
        <Link href={{ pathname: router.pathname, query: { p: url - 1 } }}>
          &lt;
        </Link>
      ) : (
        <span className="dark:text-[#9a9a9a] text-[#535353]">&lt;</span>
      )}{" "}
      {url > 1 && url - 1 > 1 && (
        <Link href={{ pathname: router.pathname, query: { p: 1 } }}>1 ...</Link>
      )}{" "}
      {url > 1 && (
        <Link href={{ pathname: router.pathname, query: { p: url - 1 } }}>
          {url - 1}
        </Link>
      )}{" "}
      <Link href={{ pathname: router.pathname, query: { p: url } }}>
        {url}
      </Link>{" "}
      {url < amount && (
        <Link href={{ pathname: router.pathname, query: { p: url + 1 } }}>
          {url + 1}
        </Link>
      )}{" "}
      {url < amount && url + 1 < amount && (
        <Link href={{ pathname: router.pathname, query: { p: amount } }}>
          {"... " + amount}
        </Link>
      )}{" "}
      {url < amount ? (
        <Link href={{ pathname: router.pathname, query: { p: url + 1 } }}>
          &gt;
        </Link>
      ) : (
        <span className="dark:text-[#9a9a9a] text-[#535353]">&gt;</span>
      )}
    </div>
  );
}

export default PaginationBar;
