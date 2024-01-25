import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'; 
import pythonData  from "../resources/text/pythonData.json"


function PaginationBar() {
  const router = useRouter();
  const searchParams = useSearchParams()
  const search = searchParams.get('p')
  const url = parseInt(search)

  const {pages} = pythonData;
  let amount = (pages.length);

  console.log(amount);
  return (
    <div>
      <Link href={{ pathname: router.pathname, query: { p: url + 1 } }}>
        Go to {url + 1}
      </Link>
    </div>
  );
}

export default PaginationBar;
