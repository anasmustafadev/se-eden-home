import React from "react";
import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Appbar from "@/components/Appbar";

function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Appbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="ml-56 pt-12">{children}</div>
      </div>
    </div>
  );
}

export default layout;
