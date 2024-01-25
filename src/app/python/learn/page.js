"use client";
import React from "react";
import Navbar from "../../components/navbar";
import CodeBox from "../../components/codeBox";
import Pagging from "../../components/PaginationBar";

export default function Page() {
  console.log("refresh");
  return (
    <div>
      <Navbar />
      <Pagging/>
    </div>
  );
}
