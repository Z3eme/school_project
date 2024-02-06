"use client";
import React from "react";
import Navbar from "../../components/navbar";
import PaginationBar from "../../components/PaginationBar";
import Point from "@/app/components/point";
import SidebarMenu from "@/app/components/sidebarMenu";

export default function Page() {
  return (
    <div className="">
      <Navbar />
      <SidebarMenu />
      <Point />
      
      <PaginationBar />
    </div>
  );
}
