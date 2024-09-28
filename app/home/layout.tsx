import React from "react";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
// import Appbar from "@/components/Appbar";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-200 h-screen">
      {/* <Appbar /> */}
      <div className="flex flex-row w-full">
        <Sidebar />
        <div className="md:ml-56 ml-5 mr-5 mt-5 w-full">{children}</div>
      </div>
    </div>
  );
}

export default layout;
