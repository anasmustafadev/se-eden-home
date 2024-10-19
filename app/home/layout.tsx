import React from "react";
import { ReactNode } from "react";
import AppSidebar from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-slate-200 h-full">
      <SidebarProvider>
        <AppSidebar />
        <div className="flex flex-row w-full">
          <SidebarTrigger />
          <div className="ml-5 mr-10 mt-5 w-full">{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default layout;
