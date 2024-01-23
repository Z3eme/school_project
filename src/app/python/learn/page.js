"use client";
import React from "react";
import Navbar from "../../components/navbar";
import CodeBox from "../../components/codeBox";
import Pagging from "../../components/paginationBar";


export default function Page() {
  const totalPages = 50

  return (
    <div>
      <h1>Strona główna</h1>

      <Pagging />
    </div>
  );
}
