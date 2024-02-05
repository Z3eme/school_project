"use client";
import React from "react";
import Navbar from "../../components/navbar";
import PaginationBar from "../../components/PaginationBar";
import Point from "@/app/components/point";

export default function Page() {
  return (
    <div className="">
      <Navbar />
      <Point />
      <PaginationBar />
    </div>
  );
}
