"use client";
import React from "react";
import Navbar from "../../components/navbar";
import PaginationBar from "../../components/PaginationBar";
import Point from "@/app/components/point";
import SidebarMenu from "@/app/components/sidebarMenu";
import pythonData from "../../resources/text/pythonData.json";
import Intepreter from "../../components/PythonInterpreter";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <div className="">
          <SidebarMenu />
        </div>

        <div className="flex flex-row items-center flex-wrap gap-10">
          <div className="">
            <Point />
          </div>

          <div className="">
            <Intepreter correct={""} />
          </div>
        </div>
      </div>

      <div className="sticky top-[100vh] mb-2">
        <PaginationBar data={pythonData} dataType={"learn"} />
      </div>
    </div>

  );
}
