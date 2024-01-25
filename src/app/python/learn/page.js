"use client";
import React from "react";
import Navbar from "../../components/navbar";
import CodeBox from "../../components/codeBox";
import Pagging from "../../components/PaginationBar";
import GetCurrentUrl from "../../components/getCurrentUrl";

export default function Page() {
  const url = GetCurrentUrl();
  return (
    <div>
      <Navbar />
      <Pagging index={url} />
    </div>
  );
}
