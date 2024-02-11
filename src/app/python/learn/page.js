"use client";
import React from "react";
import Navbar from "../../components/navbar";
import PaginationBar from "../../components/PaginationBar";
import Point from "@/app/components/point";
import SidebarMenu from "@/app/components/sidebarMenu";
import pythonData from "../../resources/text/pythonData.json";

export default function Page() {
  return (
    <div className="overflow-x-hidden h-screen w-full flex flex-col ">
      <div className="z-[5]">
        <Navbar />
      </div>
      <div className="flex flex-grow w-full z-[5]">
        <div className="z-[2]">
          <SidebarMenu />
        </div>
        <div className="ml-[40%] z-[1]">
          <Point />
        </div>
      </div>
      <div className="mb-[2%]">
        <PaginationBar data={pythonData} />
      </div>
    </div>
  );
}
