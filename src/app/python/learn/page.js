"use client";
import React from "react";
import Navbar from "../../components/navbar";
import PaginationBar from "../../components/PaginationBar";

export default function Page() {
  console.log("refresh");
  return (
    <div className="">
      <Navbar />
      <PaginationBar />
    </div>
  );
}
