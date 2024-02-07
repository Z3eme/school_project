"use client";
import React from "react";
import Navbar from "../../components/navbar";
import PaginationBar from "../../components/PaginationBar";
import Point from "@/app/components/point";
import SidebarMenu from "@/app/components/sidebarMenu";

export default function Page() {
  return (
    <div className="overflow-x-hidden h-screen w-full flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-grow w-full">
        <div className="w-1/4 ">
          <SidebarMenu />
        </div>
        <div className="w-3/4">
          <Point />
        </div>
      </div>
      <div className="mb-[2%]">
        <PaginationBar />
      </div>
    </div>
  );
}
